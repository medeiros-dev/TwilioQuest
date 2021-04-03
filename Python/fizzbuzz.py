import sys

numbers = sys.argv
numbers.pop(0)

for number in numbers:
    numberint = int(number)
    if numberint%3 == 0 and numberint%5 == 0:
        print('fizzbuzz')
    elif numberint%3 == 0:
        print('fizz')
    elif numberint%5 == 0:
        print('buzz')
    else:
        print(number) 