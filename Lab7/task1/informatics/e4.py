x = int(input())
arr = list(map(int, input().split()))
txt = "NO"


for i in range(x):
    if i != 0:
        if(arr[i] == arr[i -1]):
            txt = "YES"
            break

print(txt)
        
