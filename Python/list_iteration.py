import sys

order_of_succession = sys.argv
order_of_succession.pop(0)

for index, item in enumerate(order_of_succession, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)