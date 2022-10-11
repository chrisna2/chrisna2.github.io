---
title: "[algorithm] 알고리즘 03 : 정렬알고리즘 - [3] 병합정렬"
date: 2022-10-11 22:36:00 +0900
categories: algorithm
tags: [퀵정렬, 정렬알고리즘]
classes: wide
---

***지금의 나에게는 많은 것을 한번에 하기 보다. 멈추지 않고 끊임없이 하는 것이 더 중요하다.***

# 모두의 알고리즘 - part 3 - 3 : 정렬알고리즘 - 퀵 정렬
## 퀵 정렬
> ***전체배열(0<N)에서 임의의 기준값을 설정한다.***  
> ***&rightarrow; 기준값은 그대로 두고 기준값에 따라 작은값 큰값을 나눠 그룹을 설정한다.***  
> ***&rightarrow; 각 그룹끼리 정렬을 실시한다.***  
> ***&rightarrow; 이 과정을 반복하여 해당 그룹을 병합하면 정렬이 완료된다.***  

## 퀴 정렬 알고리즘 골격
```python
def quick_sort(a):
    n = len(a)
    # 종료조건 : 정렬한 리스트의 자료개수가 한걔면 리턴
    if n <= 1:
        return a
 
    # 기준값 설정 임의값 셋팅
    pivot = a[-1] 

    g1 = []
    g2 = []

    # 기준값 제외 나머지 값 분리
    for i in range(0,n-1) :
        if a[i] < pivot :
            g1.append(a[i])
        else
            g2.append(a[i])
    
    # 병합 처리
    return quick_sort(g1) + pivot + quick_sort(g2)
```

## 퀵 정렬 알고리즘 Java
```java
    QuickSort.java 참조
    QuickSort2.java 참조
```

### 퀵정렬의 효용성
- 최악의 경우 : O($n^2$) 
- 일반적인 경우 : O(n $\log{n}$)
- 퀵정렬을 효율적으로 하기 위해선 해당 값의 기준 값을 설정하는 것이 가장 중요 보통 해당 값들의 평균이나 중간값에서 가장 큰 효율성을 지님