// Use the JS library to create a bucket.

const { data, error } = await supabase.storage.createBucket('pins')