CREATE TABLE
  users (
    uuid UUID,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    profile_picture_url TEXT,
    email_address TEXT,
    PRIMARY KEY (uuid),
    CONSTRAINT fk_auth_users FOREIGN KEY (uuid) REFERENCES auth.users (id) ON DELETE CASCADE
  );

CREATE TABLE
  boards (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    title TEXT,
    description TEXT,
    creator_uuid UUID not null REFERENCES users (uuid) ON DELETE CASCADE,
    PRIMARY KEY (uuid)
  );

CREATE TABLE
  pins (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    title TEXT,
    description TEXT,
    image_url TEXT,
    link_url TEXT,
    creator_uuid UUID not null REFERENCES users (uuid) ON DELETE CASCADE,
    PRIMARY KEY (uuid)
  );

CREATE TABLE
  boards_pins (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    board_uuid UUID not null REFERENCES boards (uuid) ON DELETE CASCADE,
    pin_uuid UUID not null REFERENCES pins (uuid) ON DELETE CASCADE,
    PRIMARY KEY (uuid)
  );

CREATE TABLE
  pins_comments (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    comment
      TEXT,
      creator_uuid UUID not null REFERENCES users (uuid) ON DELETE CASCADE,
      pin_uuid UUID not null REFERENCES pins (uuid) ON DELETE CASCADE,
      PRIMARY KEY (uuid)
  );

CREATE TABLE
  boards_comments (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    comment
      TEXT,
      board_uuid UUID not null REFERENCES boards (uuid) ON DELETE CASCADE,
      comment_creator_uuid UUID not null REFERENCES users (uuid) ON DELETE CASCADE,
      pin_uuid UUID not null REFERENCES pins (uuid) ON DELETE CASCADE,
      PRIMARY KEY (uuid)
  );

CREATE TABLE
  boards_members (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    board_uuid UUID not null REFERENCES boards (uuid) ON DELETE CASCADE,
    member_uuid UUID not null REFERENCES users (uuid) ON DELETE CASCADE,
    PRIMARY KEY (uuid)
  );

CREATE TABLE
  users_followers (
    uuid UUID DEFAULT uuid_generate_v4 () not null,
    inserted_at TIMESTAMP DEFAULT NOW() not null,
    updated_at TIMESTAMP DEFAULT NOW() not null,
    user_uuid UUID not null references users (uuid) ON DELETE CASCADE,
    follower_uuid UUID not null references users (uuid) ON DELETE CASCADE,
    PRIMARY KEY (uuid)
  );

CREATE
OR REPLACE FUNCTION create_pin (
  title text,
  description text,
  link_url text,
  creator_uuid uuid,
  board_uuid uuid,
  image_url text,
  loading_image_url text
) RETURNS void AS $$
BEGIN
  INSERT INTO public.pins (title, description, link_url, creator_uuid, image_url, loading_image_url)
  VALUES (title, description, link_url, creator_uuid, image_url, loading_image_url);

  INSERT INTO boards_pins (board_uuid, pin_uuid)
  SELECT board_uuid, uuid
  FROM public.pins
  WHERE public.pins.image_url = create_pin.image_url
  AND public.pins.creator_uuid = create_pin.creator_uuid
  ORDER BY uuid DESC
  LIMIT 1;
END;
$$ LANGUAGE plpgsql;

CREATE
OR REPLACE FUNCTION save_pin (pin_uuid uuid, board_uuid uuid) RETURNS void AS $$
BEGIN
  IF EXISTS (
    SELECT *
    FROM boards_pins
    WHERE boards_pins.board_uuid = save_pin.board_uuid
    AND boards_pins.pin_uuid = save_pin.pin_uuid
  ) THEN
    -- Perform an update
    UPDATE boards_pins
    SET boards_pins.board_uuid = save_pin.board_uuid
    WHERE pin_uuid = save_pin.pin_uuid;
  ELSE
    -- Perform an insert
    INSERT INTO boards_pins (board_uuid, pin_uuid)
    VALUES (save_pin.board_uuid, save_pin.pin_uuid);
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE
OR REPLACE FUNCTION handle_new_user () RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (uuid)
  VALUES (new.id);

  INSERT INTO public.boards (creator_uuid, title, description)
  VALUES (new.id, 'default', 'everybody has one!');

  INSERT INTO public.boards_members (member_uuid, board_uuid)
  SELECT new.id, uuid 
  FROM public.boards
  WHERE creator_uuid = new.id
  LIMIT 1;

  RETURN new;
END;
$$ LANGUAGE plpgsql security definer;

DROP TRIGGER
  if exists new_user on auth.users;

CREATE TRIGGER
  new_user
AFTER
  INSERT ON auth.users FOR EACH ROW
EXECUTE
  PROCEDURE handle_new_user ();

CREATE EXTENSION IF NOT EXISTS moddatetime SCHEMA extensions;

-- assuming the table name is "todos", and a timestamp column "updated_at"
-- this trigger will set the "updated_at" column to the current timestamp for every update
DO $$ 
DECLARE
  x RECORD;
BEGIN
  -- Loop through all tables in the public schema
  FOR x IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
    EXECUTE format('
      CREATE TRIGGER handle_updated_at 
      BEFORE UPDATE ON %I 
      FOR EACH ROW 
      EXECUTE PROCEDURE moddatetime(updated_at);',
      x.tablename);
  END LOOP;
END $$;

CREATE OR REPLACE FUNCTION add_new_user (id uuid)
RETURNS trigger 
AS $$
BEGIN
  INSERT INTO users (id)
  VALUES ();
END;
$$ LANGUAGE plpgsql;
