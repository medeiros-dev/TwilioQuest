import sys

x = int(sys.argv[1])
y = int(sys.argv[2])

z = x+y

if z <= 0:
    print('You have chosen the path of destitution.')

if z > 1 and z<=100:
    print('You have chosen the path of plenty.')

if z > 100:
    print('You have chosen the path of excess.')