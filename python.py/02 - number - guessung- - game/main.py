import random


def play_game():
    print("=" * 40)
    print("       NUMBER GUESSING GAME")
    print("=" * 40)

    secret_number = random.randint(1, 100)

    attempts = 0

    print("\nI have selected a number between 1 and 100.")
    print("Try to guess it!\n")

    while True:

        try:
            guess = int(input("Enter your guess: "))

        except ValueError:
            print("Please enter a valid number.")
            continue

        if guess < 1 or guess > 100:
            print("Please enter a number between 1 and 100.")
            continue

        attempts += 1

        if guess < secret_number:
            print("Too low! Try a higher number.")

        elif guess > secret_number:
            print("Too high! Try a lower number.")

        else:
            print("\n🎉 Congratulations!")
            print(f"You guessed the number in {attempts} attempts.")
            break


if __name__ == "__main__":
    play_game()