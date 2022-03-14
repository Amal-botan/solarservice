DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS project_photos CASCADE;
DROP TABLE IF EXISTS instructions CASCADE;
DROP TABLE IF EXISTS materials CASCADE;

DROP TABLE IF EXISTS solar_panals CASCADE;
DROP TABLE IF EXISTS project_likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS comment_photos CASCADE;
DROP TABLE IF EXISTS comment_likes CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_image TEXT NOT NULL DEFAULT 'https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png',
  password VARCHAR(255) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  address TEXT,
  phone_number BIGINT,
  date_of_birth DATE,
  gender VARCHAR(255) NOT NULL,
  online_status BOOLEAN DEFAULT true
);

CREATE TABLE friends (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP,
  project_text TEXT,
  total_cost INTEGER,
  duration INTEGER
);

CREATE TABLE tools (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  tool TEXT,
  location_to_purchase TEXT,
  tool_cost INTEGER
);

CREATE TABLE project_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  project_photo TEXT
);

CREATE TABLE instructions (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  instruction TEXT
);

CREATE TABLE materials (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  material TEXT,
  location_to_purchase TEXT,
  material_cost INTEGER
);

CREATE TABLE solar_panals (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  width INTEGER NOT NULL,
  length INTEGER NOT NULL,
  surface TEXT NOT NULL
);

CREATE TABLE project_likes (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  project_id INTEGER REFERENCES projects(id),
  user_id INTEGER REFERENCES users(id),
  comment_text TEXT
);

CREATE TABLE comment_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  comment_id INTEGER REFERENCES comments(id),
  comment_photo TEXT
);

CREATE TABLE comment_likes (
  id SERIAL PRIMARY KEY NOT NULL,
  comment_id INTEGER REFERENCES comments(id),
  user_id INTEGER REFERENCES users(id)
);


