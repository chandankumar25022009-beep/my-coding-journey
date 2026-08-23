def calculator():
    print("===== SIMPLE CALCULATOR =====")

    while True:
        print("\nChoose an operation:")
        print("1. Addition (+)")
        print("2. Subtraction (-)")
        print("3. Multiplication (*)")
        print("4. Division (/)")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "5":
            print("Calculator closed.")
            break

        if choice not in ["1", "2", "3", "4"]:
            print("Invalid choice!")
            continue

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))

            if choice == "1":
                result = num1 + num2
            elif choice == "2":
                result = num1 - num2
            elif choice == "3":
                result = num1 * num2
            elif choice == "4":
                if num2 == 0:
                    print("Cannot divide by zero!")
                    continue
                result = num1 / num2

            print(f"Result: {result}")

        except ValueError:
            print("Please enter valid numbers.")


if __name__ == "__main__":
    calculator()