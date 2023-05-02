## Design

Pages:

- Landing page and login and register in /signIn
  - header
  - footer
  - sidebar
  - tagline
- User account page /account
  - header
  - profile
  - change password
  - log out
  - footer
- Collection page in /user_id
  - header
  - board folder with thumbnail
  - footer
- Inside board /board/[board_name]
  - pin cards
- PinFeed in /
  - pin cards in infinite scroll
- Zoomed in pin /pin/[pin_uid]
  - comment

Components:

- header
  - search
- footer
-

## Data Model

A user has many boards, created many pins, liked many pins, has many comments
- users

  - id bigint increment primary
  - created_at time
  - updated_at time
  - username text
  - profile_picture_url string

A board has a single user, has many pins
- boards

  - id bigint increment primary
  - created_at time
  - updated_at time
  - name text
  - board_owner_id bigint notnull references users

A pin has a single creator / user, is in many boards, has many comments
- pins

  - id bigint increment primary
  - created_at time
  - updated_at time
  - title text
  - description text
  - url_link text
  - image_url text
  - pin_creator_id bigint notnull references users
  - original_board_id bigint notnull references boards

A like has a single pin, and a single creator, and has a single board
- likes

  - id bigint increment primary
  - created_at time
  - updated_at time
  - pin bigint notnull references pins
  - user bigint notnull references users
  - saved_in bigint notnull references boards

A comment has a single pin, a single creator
- comments
  - id bigint increment primary
  - created_at time
  - updated_at time
  - commented_pin bigint notnull references pins
  - comment_creator bigint notnull references users