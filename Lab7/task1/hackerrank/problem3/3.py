if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    max1 = max2 = -400
    
    for i in range(len(arr)):
        if max1 < arr[i]:
            max2 = max1
            max1 = arr[i]
        elif (max2 < arr[i]) and (arr[i] != max1):
            max2 = arr[i]
        
    print(max2)
        