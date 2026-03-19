import math
x = int(input())
i = 1

while(i <= x):
    if math.isqrt(i) ** 2 == i:
        print(i)
    i += 1

