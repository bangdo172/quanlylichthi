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

INSERT INTO Subject (subject_id, subject_name)
VALUES ('3', 'Học máy');

SELECT * FROM Subject;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';