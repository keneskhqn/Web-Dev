x = int(input())
arr = list(map(int, input().split()))

# for i in range(x):
#     a = int(input())
#     arr.append(a)

# for i in range(0, x, 2):
#     print(arr[i], end=" ")
print(*arr[::2])
     
