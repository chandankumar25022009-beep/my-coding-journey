students = []


def add_student():
    print("\n--- Add Student ---")

    name = input("Enter student name: ").strip()

    roll_no = input("Enter roll number: ").strip()

    course = input("Enter course: ").strip()

    try:
        marks = float(input("Enter marks: "))
    except ValueError:
        print("Invalid marks.")
        return

    student = {
        "name": name,
        "roll_no": roll_no,
        "course": course,
        "marks": marks
    }

    students.append(student)

    print("Student added successfully!")


def view_students():
    print("\n--- Student List ---")

    if not students:
        print("No students found.")
        return

    for student in students:
        print("-" * 35)

        print(f"Name    : {student['name']}")
        print(f"Roll No : {student['roll_no']}")
        print(f"Course  : {student['course']}")
        print(f"Marks   : {student['marks']}")


def search_student():
    print("\n--- Search Student ---")

    roll_no = input("Enter roll number: ").strip()

    for student in students:

        if student["roll_no"] == roll_no:

            print("\nStudent Found!")

            print(f"Name    : {student['name']}")
            print(f"Roll No : {student['roll_no']}")
            print(f"Course  : {student['course']}")
            print(f"Marks   : {student['marks']}")

            return

    print("Student not found.")


def delete_student():
    print("\n--- Delete Student ---")

    roll_no = input("Enter roll number: ").strip()

    for student in students:

        if student["roll_no"] == roll_no:

            students.remove(student)

            print("Student deleted successfully!")

            return

    print("Student not found.")


def main():

    while True:

        print("\n" + "=" * 40)
        print("       STUDENT MANAGEMENT SYSTEM")
        print("=" * 40)

        print("1. Add Student")
        print("2. View Students")
        print("3. Search Student")
        print("4. Delete Student")
        print("5. Exit")

        choice = input("\nEnter your choice: ")

        if choice == "1":
            add_student()

        elif choice == "2":
            view_students()

        elif choice == "3":
            search_student()

        elif choice == "4":
            delete_student()

        elif choice == "5":
            print("Thank you for using the system!")
            break

        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()