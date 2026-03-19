import math
count = 0

x = input()
d = int(input())

for i in range (0, len(x)):
    if(int(x[i]) == d):
        count += 1
print(count)
