USE lichthi;
-- SHOW DATABASES; 
SHOW TABLES;

DROP TABLE Student_exam;
DROP TABLE Exam_room;
DROP TABLE Exam_schedule;
DROP TABLE Student_subject;
DROP TABLE Room;
DROP TABLE Exam;
DROP TABLE Admin;
DROP TABLE Student;
DROP TABLE Subject;

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

CREATE TABLE Exam(
  exam_id int NOT NULL AUTO_INCREMENT,
  exam_name varchar(45),
  PRIMARY KEY (exam_id)
);

CREATE TABLE Exam_schedule (
  es_id int NOT NULL AUTO_INCREMENT,
  subject_id varchar(45) NOT NULL,
  exam_id int NOT NULL,
  start_time date,
  end_time date,
  PRIMARY KEY (es_id),
  FOREIGN KEY (subject_id) REFERENCES Subject(subject_id),
  FOREIGN KEY (exam_id) REFERENCES Exam(exam_id)
);

CREATE TABLE Room (
  room_id int NOT NULL AUTO_INCREMENT,
  room_name varchar(45) NOT NULL,
  computer int NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE Exam_room (
  er_id int NOT NULL AUTO_INCREMENT,
  es_id int NOT NULL,
  student_amount int,
  PRIMARY KEY (er_id),
  FOREIGN KEY (es_id) REFERENCES Exam_schedule(es_id)
);

CREATE TABLE Student_exam (
  er_id int NOT NULL AUTO_INCREMENT,
  student_id varchar(45) NOT NULL,
  FOREIGN KEY (er_id) REFERENCES Exam_room(er_id),
  FOREIGN KEY (student_id) REFERENCES Student(student_id)
);
