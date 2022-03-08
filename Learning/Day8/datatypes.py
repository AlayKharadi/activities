str = 'hello, world!!!'
print(type(str))
print(str)
print(str[0:5])
print(str[7])
print(str[6:34])

print('--------------------------------------------------------')
colors = {
    'red',
    'pink',
    'yellow',
    'blue',
    'green',
    'black',
    'white'
}

print(type(colors))
print(colors)

print('--------------------------------------------------------')
setA = set('nvjvnsjkbnsjkrbnvejn')
print(type(setA))
print(setA)

setA.add('p')

print(setA)

setB = frozenset('nvjvnsjkbnsjkrbnvejn')

print(setB)

# setB.add('p')

print('--------------------------------------------------------')
setC = frozenset([1,4,5,6])
print(type(setC))
print(setC)

print('--------------------------------------------------------')
numA = 20
numB = 20.12
numC = 3.14j
numD = 438942958459284585L
print(type(numA))
print(numA)
print(type(numB))
print(numB)
print(type(numC))
print(numC)
print(type(numD))
print(numD)

print('--------------------------------------------------------')
listA = ['fnbjdfn', 3, 'r', 3.14j]
listB = ['fnbj', 32, '5', 54892589452L]

print('--------------------------------------------------------')
print(type(listA))
print(listA)
print(listB * 2)
print(listA + listB)

print('--------------------------------------------------------')
user = {
    'name': 'John Doe',
    'age': 23
}

print(type(user))
print(user)
print(user.values())
print(user.keys())
print(user['name'])

print('--------------------------------------------------------')
tupleA = ('John Doe', 23, 'Book')
tupleB = (34, 'Pink Red')
print(type(tupleA))
print(tupleA)
print(tupleB)
print(tupleA + tupleB)
print(tupleA[1])

print('--------------------------------------------------------')
rangeA = range(2, 6)
print(type(rangeA))
print(rangeA)

print('--------------------------------------------------------')
byteA = b"JohnDoe"
print(type(byteA))
print(byteA)

print('--------------------------------------------------------')
byteArrayA = bytearray([5, 4, 6, 8])
print(type(byteArrayA))
print(byteArrayA)

print('--------------------------------------------------------')
temp = memoryview(bytes(8))
print(type(temp))
print(temp)