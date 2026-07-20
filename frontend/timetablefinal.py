import sqlite3

def run_timetable_system():
    # 1. Connect to an In-Memory SQLite Database
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute("PRAGMA foreign_keys = ON;")

    # ==========================================================
    # 2. SCHEMA DEFINITION
    # ==========================================================
    cursor.executescript("""
    CREATE TABLE departments (
        department_id INTEGER PRIMARY KEY AUTOINCREMENT,
        department_name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE students (
        student_id INTEGER PRIMARY KEY AUTOINCREMENT,
        reg_no TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        department_id INTEGER,
        year INTEGER,
        semester INTEGER NOT NULL,  -- Changed from TEXT to INTEGER
        section TEXT NOT NULL,
        password TEXT,
        FOREIGN KEY(department_id) REFERENCES departments(department_id)
    );

    CREATE TABLE subjects (
        subject_id TEXT PRIMARY KEY, 
        subject_name TEXT NOT NULL,
        department_id INTEGER,
        semester INTEGER NOT NULL,  -- Changed from TEXT to INTEGER
        FOREIGN KEY(department_id) REFERENCES departments(department_id)
    );

    CREATE TABLE timetable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        department_id INTEGER,
        semester INTEGER NOT NULL,  -- Changed from TEXT to INTEGER
        section TEXT NOT NULL,
        day TEXT NOT NULL,       
        period INTEGER NOT NULL,  
        subject_id TEXT,         
        faculty_id TEXT,         
        room TEXT,
        FOREIGN KEY(department_id) REFERENCES departments(department_id),
        FOREIGN KEY(subject_id) REFERENCES subjects(subject_id)
    );
    """)

    # ==========================================================
    # 3. SEED DATA INSERTION (NUMERIC SEMESTERS 1, 3, 5, 7)
    # ==========================================================
    cursor.execute("INSERT INTO departments (department_name) VALUES ('Computer Science and Engineering');")

    # Insert Students (All 4 Batches)
    students_data = [
        # First Year (2026 Batch) -> Semester 1
        ('260001', 'Kavin', 1, 1, 1, 'A', 'pass1'),
        ('260002', 'Harini', 1, 1, 1, 'A', 'pass2'),
        ('260003', 'Dinesh', 1, 1, 1, 'A', 'pass3'),
        ('260004', 'Akila', 1, 1, 1, 'B', 'pass4'),
        ('260005', 'Arjun', 1, 1, 1, 'B', 'pass5'),
        ('260006', 'Priya', 1, 1, 1, 'B', 'pass6'),
        # Second Year (2025 Batch) -> Semester 3
        ('250001', 'Akash', 1, 2, 3, 'A', 'pass7'),
        ('250002', 'Haritha', 1, 2, 3, 'A', 'pass8'),
        ('250003', 'Pradeep', 1, 2, 3, 'A', 'pass9'),
        ('250004', 'Janani', 1, 2, 3, 'B', 'pass10'),
        ('250005', 'Kishore', 1, 2, 3, 'B', 'pass11'),
        ('250006', 'Bhavani', 1, 2, 3, 'B', 'pass12'),
        # Third Year (2024 Batch) -> Semester 5
        ('240001', 'Aravind', 1, 3, 5, 'A', 'pass13'),
        ('240002', 'Nithya', 1, 3, 5, 'A', 'pass14'),
        ('240003', 'Subash', 1, 3, 5, 'A', 'pass15'),
        ('240004', 'Deepa', 1, 3, 5, 'B', 'pass16'),
        ('240005', 'Kamesh', 1, 3, 5, 'B', 'pass17'),
        ('240006', 'Soundarya', 1, 3, 5, 'B', 'pass18'),
        # Fourth Year (2023 Batch) -> Semester 7
        ('230001', 'Arun', 1, 4, 7, 'A', 'pass19'),
        ('230002', 'Vaishnavi', 1, 4, 7, 'A', 'pass20'),
        ('230003', 'Deepak', 1, 4, 7, 'A', 'pass21'),
        ('230004', 'Anbarasu', 1, 4, 7, 'B', 'pass22'),
        ('230005', 'Nila', 1, 4, 7, 'B', 'pass23'),
        ('230006', 'Karthika', 1, 4, 7, 'B', 'pass24')
    ]
    cursor.executemany("INSERT INTO students (reg_no, name, department_id, year, semester, section, password) VALUES (?, ?, ?, ?, ?, ?, ?);", students_data)

    # Insert Subjects Master
    subjects_data = [
        # Semester 1
        ('26MA101', 'Matrices and Calculus', 1, 1),
        ('26PH101', 'Engineering Physics', 1, 1),
        ('26CY101', 'Engineering Chemistry', 1, 1),
        ('26CS101', 'Problem Solving and Python Programming', 1, 1),
        ('26GE101', 'Engineering Graphics', 1, 1),
        
        # Semester 3[cite: 1]
        ('24MA301A', 'Probability and Statistics', 1, 3),
        ('24CS301A', 'Data Structures', 1, 3),
        ('24CS302A', 'Object Oriented Programming', 1, 3),
        ('24ES301A', 'Digital Principles and Computer Organization', 1, 3),
        ('24CS303A', 'Essentials of Web Development', 1, 3),
        ('24CS304A', 'Foundations of Data Science', 1, 3),
        ('24EM301A(A)', 'Employability Skills I (Aptitude)', 1, 3),
        ('24EM301A(V)', 'Employability Skills I (Verbal)', 1, 3),
        ('24ES301A(L)', 'Digital Principles Lab', 1, 3),
        
        # Semester 5[cite: 1]
        ('24AD503', 'Computer Networks', 1, 5),
        ('24CS501', 'Compiler Design', 1, 5),
        ('24CS502', 'Web Technologies', 1, 5),
        ('24CS503', 'Object Oriented Software Engineering', 1, 5),
        ('24CS504', 'Artificial Intelligence and Machine Learning', 1, 5),
        ('24CS901', 'Exploratory Data Analysis', 1, 5),
        ('24EM501', 'Employability Skills III', 1, 5),
        
        # Semester 7[cite: 1]
        ('GE3791', 'Human Values and Ethics', 1, 7),
        ('GE3751', 'Principles of Management', 1, 7),
        ('CME365', 'Renewable Energy Technologies', 1, 7),
        ('A13021', 'IT in Agricultural System', 1, 7),
        ('OG1352', 'Geographical Information System', 1, 7),
        ('CS3711', 'Summer Internship', 1, 7)
    ]
    cursor.executemany("INSERT INTO subjects VALUES (?, ?, ?, ?);", subjects_data)

    # Complete Timetable Entries[cite: 1]
    timetable_entries = []
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    
    # Semester 1
    for day in days:
        timetable_entries.extend([
            (1, 1, 'A', day, 1, '26MA101', 'Dr. A. R. Raman', 'RV 101'),
            (1, 1, 'A', day, 2, '26PH101', 'Dr. S. Priya', 'RV 101'),
            (1, 1, 'A', day, 3, '26CS101', 'Prof. M. Kumar', 'RV 101'),
            (1, 1, 'A', day, 4, '26CY101', 'Dr. K. Kavitha', 'RV 101'),
            (1, 1, 'A', day, 5, '26GE101', 'Prof. R. Rajesh', 'Drawing Hall'),
            (1, 1, 'A', day, 6, '26GE101', 'Prof. R. Rajesh', 'Drawing Hall'),
            (1, 1, 'A', day, 7, None, 'FREE HOUR', 'RV 101'),
            (1, 1, 'A', day, 8, None, 'FREE HOUR', 'RV 101')
        ])

    # Semester 3 Monday & Tuesday[cite: 1]
    timetable_entries.extend([
        (1, 3, 'A', 'Monday', 1, '24MA301A', 'Dr.N.Subashini (Mat)', 'RV 409'),
        (1, 3, 'A', 'Monday', 2, '24EM301A(A)', 'Dr.T.Prabha (T&P)', 'RV 409'),
        (1, 3, 'A', 'Monday', 3, '24CS302A', 'Ms.T.Nagalakshmi', 'RV 409'),
        (1, 3, 'A', 'Monday', 4, '24CS301A', 'Ms.C.Maria Rhythm', 'RV 409'),
        (1, 3, 'A', 'Monday', 5, '24CS304A', 'Dr.S.Mohana', 'RV 409'),
        (1, 3, 'A', 'Monday', 6, '24CS303A', 'Mr.D.Boobala Muralitharan', 'RV 409'),
        (1, 3, 'A', 'Monday', 7, '24ES301A(L)', 'Ms.J.Sathia Parkavi', 'RV 409'),
        (1, 3, 'A', 'Monday', 8, '24ES301A(L)', 'Ms.J.Sathia Parkavi', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 1, '24CS301A', 'Ms.C.Maria Rhythm', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 2, '24MA301A', 'Dr.N.Subashini (Mat)', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 3, '24CS304A', 'Dr.S.Mohana', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 4, '24CS303A', 'Mr.D.Boobala Muralitharan', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 5, '24ES301A', 'Ms.J.Sathia Parkavi', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 6, '24CS304A', 'Dr.S.Mohana', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 7, None, 'FREE HOUR', 'RV 409'),
        (1, 3, 'A', 'Tuesday', 8, None, 'FREE HOUR', 'RV 409')
    ])
    for day in ['Wednesday', 'Thursday', 'Friday']:
        timetable_entries.extend([
            (1, 3, 'A', day, 1, '24CS302A', 'Ms.T.Nagalakshmi', 'RV 409'),
            (1, 3, 'A', day, 2, '24MA301A', 'Dr.N.Subashini (Mat)', 'RV 409'),
            (1, 3, 'A', day, 3, '24CS304A', 'Dr.S.Mohana', 'RV 409'),
            (1, 3, 'A', day, 4, '24CS303A', 'Mr.D.Boobala Muralitharan', 'RV 409'),
            (1, 3, 'A', day, 5, '24CS301A', 'Ms.C.Maria Rhythm', 'RV 409'),
            (1, 3, 'A', day, 6, '24EM301A(V)', 'Ms.V.Cassandra(T&P)', 'RV 409'),
            (1, 3, 'A', day, 7, None, 'FREE HOUR', 'RV 409'),
            (1, 3, 'A', day, 8, None, 'FREE HOUR', 'RV 409')
        ])
    # Semester 5[cite: 1]
    for day in days:
        timetable_entries.extend([
            (1, 5, 'A', day, 1, '24CS501', 'Ms.T.Nagalakshmi', 'RV 412'),
            (1, 5, 'A', day, 2, '24AD503', 'Ms.N.Ramya', 'RV 412'),
            (1, 5, 'A', day, 3, '24CS502', 'Dr.K.S.Chandrasekaran', 'RV 412'),
            (1, 5, 'A', day, 4, '24CS503', 'Ms.C.Maria Rhythm', 'RV 412'),
            (1, 5, 'A', day, 5, '24CS504', 'Ms.R.Sugantha Lakshmi', 'RV 412'),
            (1, 5, 'A', day, 6, '24CS901', 'Mr.R.Karthik', 'RV 412'),
            (1, 5, 'A', day, 7, '24EM501', 'Ms.J.Sathia Parkavi', 'RV 412'),
            (1, 5, 'A', day, 8, None, 'FREE HOUR', 'RV 412')
        ])
    # Semester 7[cite: 1]
    for day in days:
        timetable_entries.extend([
            (1, 7, 'A', day, 1, 'GE3791', 'Dr.R.Senthamil Selvi', 'RV 414'),
            (1, 7, 'A', day, 2, 'GE3751', 'Mr.L.Parthipan', 'RV 414'),
            (1, 7, 'A', day, 3, 'CME365', 'Mr.R.Sridhar (EEE)', 'RV 414'),
            (1, 7, 'A', day, 4, 'A13021', 'Ms.R.Sugantha Lakshmi', 'RV 414'),
            (1, 7, 'A', day, 5, 'OG1352', 'Dr.S.Rajalakshmi', 'RV 414'),
            (1, 7, 'A', day, 6, 'CS3711', 'Ms.K.Mohanappriya', 'RV 414'),
            (1, 7, 'A', day, 7, None, 'TRAINING & PLACEMENT', 'RV 414'),
            (1, 7, 'A', day, 8, None, 'FREE HOUR', 'RV 414')
        ])

    cursor.executemany("INSERT INTO timetable (department_id, semester, section, day, period, subject_id, faculty_id, room) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", timetable_entries)
    conn.commit()

    # ==========================================================
    # 4. SECURE PORTAL ACCESS (LOGIN INTERFACE)
    # ==========================================================
    print("\n=======================================================")
    print("      CAMPUS ODYSSEY: STUDENT PORTAL LOGIN            ")
    print("=======================================================")
    
    input_reg = input("Enter Register Number (e.g., 250001, 260001): ").strip()
    input_pass = input("Enter Password (e.g., pass7, pass1): ").strip()

    # Query to verify credentials
    auth_query = """
        SELECT student_id, name, semester, section, department_id 
        FROM students 
        WHERE reg_no = ? AND password = ?;
    """
    cursor.execute(auth_query, (input_reg, input_pass))
    logged_in_student = cursor.fetchone()

    if not logged_in_student:
        print("\n❌ Invalid Register Number or Password. Access Denied.")
        conn.close()
        return

    student_id, student_name, student_sem, student_sec, dept_id = logged_in_student
    
    print(f"\n✅ Welcome back, {student_name}! Login Successful.")
    print(f"Profile Detected: Semester {student_sem} | Section {student_sec}")

    # ==========================================================
    # 5. DYNAMIC TIMETABLE VISUALIZER LOOP
    # ==========================================================
    while True:
        print("\n-------------------------------------------------------")
        print(f"Active Session: {student_name} (Semester {student_sem}-{student_sec})")
        print("Type 'logout' to quit the application session.")
        
        search_day = input("Enter Day to view (e.g., Monday, Tuesday...): ").strip()
        if search_day.lower() == 'logout':
            print("Logging out securely... Goodbye!")
            break

        recommendation_query = """
        WITH TimeSlots AS (
            SELECT 1 AS p_num, '09:15 AM' AS start_t, '10:05 AM' AS end_t, 50 AS duration UNION ALL
            SELECT 2, '10:05 AM', '10:55 AM', 50 UNION ALL
            SELECT 3, '11:05 AM', '11:55 AM', 50 UNION ALL
            SELECT 4, '11:55 AM', '12:45 PM', 50 UNION ALL
            SELECT 5, '01:25 PM', '02:15 PM', 50 UNION ALL
            SELECT 6, '02:15 PM', '03:05 PM', 50 UNION ALL
            SELECT 7, '03:15 PM', '04:00 PM', 45 UNION ALL
            SELECT 8, '04:00 PM', '04:45 PM', 45
        ),
        BaseSchedule AS (
            SELECT 
                t.period,
                ts.start_t AS [Period Start],
                ts.end_t AS [Period End],
                COALESCE(s.subject_name, 'No Scheduled Class (Free Hour)') AS [Class Description],
                COALESCE(t.faculty_id, 'N/A') AS [Handled By],
                t.room AS [Room Location],
                LEAD(t.subject_id) OVER (ORDER BY t.period) AS next_subject,
                LEAD(ts.duration) OVER (ORDER BY t.period) AS next_duration
            FROM timetable t
            JOIN TimeSlots ts ON t.period = ts.p_num
            LEFT JOIN subjects s ON t.subject_id = s.subject_id
            WHERE t.department_id = ? 
              AND t.semester = ? 
              AND t.section = ? 
              AND t.day = ?
        )
        SELECT 
            period, [Period Start], [Period End], [Class Description], 
            [Handled By], [Room Location], [Free Next Hour?], [Smart Suggestions]
        FROM (
            SELECT *,
                CASE 
                    WHEN next_subject IS NULL THEN 'Yes! Free window coming up next.'
                    ELSE 'No, subsequent period is occupied.'
                END AS [Free Next Hour?],
                CASE 
                    WHEN next_subject IS NULL THEN 'You have ' || COALESCE(next_duration, 50) || ' minutes of free time ahead.'
                    ELSE 'Make sure to be ready for the next lecture.'
                END AS [Smart Suggestions]
            FROM BaseSchedule
        )
        ORDER BY period;
        """

        cursor.execute(recommendation_query, (dept_id, student_sem, student_sec, search_day))
        results = cursor.fetchall()

        print("\n" + "="*85)
        print(f" SCHEDULE ANALYSIS FOR {student_name.upper()} | {search_day.upper()}")
        print("="*85)
        
        if not results:
            print("❌ No schedule records found for this day. Double check spelling (e.g., Monday).")
        else:
            for row in results:
                print(f"Period {row[0]} ({row[1]} - {row[2]}):")
                print(f"  Class: {row[3]}")
                print(f"  Faculty: {row[4]} | Room: {row[5]}")
                print(f"  Status: {row[6]}")
                print(f"  Senior AI Tip: {row[7]}")
                print("-" * 55)
        
        input("\nPress Enter to query another day...")

    conn.close()

if __name__ == "__main__":
    run_timetable_system()