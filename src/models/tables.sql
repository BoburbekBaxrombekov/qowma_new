CREATE TABLE students(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    name text,
    surename text,
    father_name text,
    phone_number text,
    passport_seria_number text,
    passport_jshir text,
    passport_location text,
    birth_date text,
    gender text,
    region text,
    city text,
    street text,
    home_number text,
    bio_img text,
    finished_study text,
    country text,
    university text,
    study_type text,
    study_lang text,
    study_level text,
    facultet text,
    checked Boolean DEFAULT FALSE
);

CREATE TABLE checking(
    id uuid DEFAULT uuid_generate_v4 (),
    img_path text,
    user_id uuid REFERENCES students(id)
);