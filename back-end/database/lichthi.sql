USE lichthi;
-- SHOW DATABASES; 
SHOW TABLES;
DROP TABLE User;
DROP TABLE Admin;
DROP TABLE Student;
DROP TABLE Subject;
DROP TABLE Student_subject;
DROP TABLE Exam_schedule;
DROP TABLE Room;
-- DROP TABLE Exam_room;

CREATE TABLE Admin (
  admin_id varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  admin_name varchar(45) NOT NULL,
  PRIMARY KEY (admin_id)
);

CREATE TABLE Student (
  student_id varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  name varchar(45),
  email varchar(45),
  gender varchar(45),
  class varchar(45),
  date_birth date,
  phone_number varchar(45),
  PRIMARY KEY (student_id)
);

CREATE TABLE Subject (
  subject_id varchar(45) NOT NULL,
  subject_name varchar(45),
  PRIMARY KEY (subject_id)
);

CREATE TABLE Student_subject (
  student_id varchar(45) NOT NULL,
  subject_id varchar(45) NOT NULL,
  can_join_exam boolean,
  es_id varchar(45),
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id)
);


CREATE TABLE Exam_schedule (
  es_id varchar(45) NOT NULL,
  subject_id varchar(45) NOT NULL,
  start_time date,
  end_time date,
  PRIMARY KEY (es_id),
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id)
);

CREATE TABLE Room (
  room_id varchar(45) NOT NULL,
  room_name varchar(45) NOT NULL,
  room_place varchar(45) NOT NULL,
  computer_max_amount int,
  PRIMARY KEY (room_id)
);

CREATE TABLE Exam_room (
  er_id varchar(45) NOT NULL,
  es_id varchar(45) NOT NULL,
  student_amount int,
  PRIMARY KEY (er_id),
  FOREIGN KEY (es_id) REFERENCES Exam_schedule(es_id)
);

CREATE TABLE Student_exam (
  er_id varchar(45) NOT NULL,
  student_id varchar(45) NOT NULL,
  FOREIGN KEY (er_id) REFERENCES Exam_room(er_id),
  FOREIGN KEY (student_id) REFERENCES Student(student_id)
);
