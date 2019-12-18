USE lichthi;

SHOW TABLES;

INSERT INTO Admin (admin_id, password, admin_name)
VALUES ('1', 'bang', 'Bang Do');

INSERT INTO Admin (admin_id, password, admin_name)
VALUES ('2', 'huy', 'Huy Tran');

INSERT INTO Admin (admin_id, password, admin_name)
VALUES ('3', 'thi', 'Thi Vu');

SELECT * FROM Admin;

INSERT INTO Subject (subject_id, subject_name)
VALUES ('1', 'Quản lý dự án phần mềm');

INSERT INTO Subject (subject_id, subject_name) VALUES ('INT2202', 'ATANM');

SELECT * FROM Subject;

INSERT INTO Exam (exam_name) VALUE ('Cuối kỳ 2010');
SELECT * FROM Exam;

SELECT * FROM Room;

INSERT INTO Exam_schedule (subject_id, exam_id) VALUES ('INT2201', '1');
SELECT * FROM Exam_schedule;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';