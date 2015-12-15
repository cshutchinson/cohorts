DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS cohorts;

CREATE TABLE students (
  id serial primary key,
  name varchar(255),
  cohort_id int
);

CREATE TABLE cohorts (
  id serial primary key,
  name varchar(255)
);
