---
title: "[algorithm] 알고리즘 03 : 정렬알고리즘 - [3] 병합정렬"
date: 2022-09-20 22:36:00 +0900
categories: algorithm
tags: [병합정렬, 정렬알고리즘]
classes: wide
---

# 모두의 알고리즘 - part 3 - 2 : 정렬알고리즘 - 병합정렬
## 병합정렬
> ***전체배열(0<N)에서 일정 숫자를 그룹으로 묶는다..***  
> ***=> 각 그룹끼리 정렬을 실시한다***  
> ***=> 각 그룹끼리 제일 첫번째 인수 끼리 비교를 진행한다.***  
> ***=> 작은 값을 뽑아서 큰 그룹으로 포함시킴 만듦***  
> ***=> 이 과정을 반복한다.***  

- 삽입정렬의 알고리즘 골격
```java
    //내부적으로 재귀호출을 사용하며 정렬을 수행한다
    mergeSort(A[1 ... n]){

        //[알고리즘 종료 조건]
        if(n <= 1>){
            return// 정렬 필요 없음
        }

        mid = n/2 // 전체 배열을 두그룹으로 나눔

        g1[] = mergeSort(A[1 ... n/2]) // 각 그룹 끼라 병합 정렬 -> 최종 2가 남을 때까지 
        g2[] = mergeSort(A[n/2 ... n])

        //두 그룹을 하나로 병합
        result[]

        i = 0
        j = 0
        // 둘다 있으면 각각 비교
        while (g1.length > 0 && g2.length > 0){//핵심기능
            if(g1[i] > g2[i]){
                result.add(g1.pop[0])//핵심기능
            }
            else{
                result.add(g2.pop[0])//핵심기능
            }
        }
        //남은 것들은 
        while (g1.length > 0){//핵심기능
            result.add(g1.pop[0])//핵심기능
        }
        
        while (g2.length > 0){//핵심기능
            result.add(g2.pop[0])//핵심기능
        }

        return result

    }    
    
```
- Java pop 기능 없이 구현 : 해당 알고리즘 골격으로 java를 구현하려 많은 에러가 발생함
    - remove(pop) 기능에 따른 배열의 size의 순차적 감소가 이 알고리즘의 핵심 골격임.
    - **[문제점 1]** arrayList에 pop에 대응하는 remove를 반복문에 사용하니 java.util.**ConcurrentModificationException** 발생
    - **[문제점 2]** iterator를 사용하면 비슷한 기능을 사용할 수 있지만 next를 한번 사용하면 다시 뒤로 뺄수 가 없어 반복조건이 발생하지 않음, 최종적으로 이진트리에서 값 비교가 이루어짐.
    - 위에 해당하는 문제점을 해결하는 방법은 그냥 remove 기능을 안쓰고 인덱스에 맞춰 result에 add 시킴.
    ```java
        MergeSort.java 참조.
    ```

- 일반적인 병합 정렬 알고리즘 골격 : return 없이 배열 안에서 값이 변경되어 처리됨
``` python

    def merge_sort_2(a):
        n = len(a)

        if n<=1:
            return

        mid = n // 2

        g1 = a[:mid]
        g2 = a[mid:]

        merge_sort_2(g1)
        merge_sort_2(g2)

        i = 0
        j = 0
        a_idx = 0
        while(i < len(g1) and j < len(g2)):
            if g1[i] < g2[j]:
                a[a_idx] = g1[i]
                i++
                a_idx++
            else:
                a[a_idx] = g2[j]
                j++
                a_idx++

        while(i < len(g1)):
            a[a_idx] = g1[i]
            i++
            a_idx++

        while(j < len(g2)):
            a[a_idx] = g2[j]
            j++
            a_idx++
```
- Java로 구현

> https://github.com/chrisna2/AlgorithmWithJava/blob/master/src/part3/merge/MergeSort.java 참조

```java

    private static List<Integer> mergeSort(List<Integer> arr) {

        //재귀함수 종료 조건
        if(arr.size() <= 1){
            return arr;
        }

        int mid = arr.size()/2;
        int end = arr.size();

        List<Integer> g1 = mergeSort(arr.subList(0, mid));
        List<Integer> g2 = mergeSort(arr.subList(mid, end));

        List<Integer> result = new ArrayList<>();
        
        /*
            [debug] 이런 식으로 하게 되면 java.util.ConcurrentModificationException 이 발생한다. 
            자바는 파이선,자바스크립트와 다르게 앞에서 부터 인덱스가 변경되면 엘리먼트의 인덱스가 실시간으로 변함
            Length가 변경되면서 해당 인덱스의 값이 null 이 되기 때문에 발생
            
            즉 자바는 for, while 같이 루핑이 도는 와중에 루핑의 조건이 되는 인덱스가 실시간으로 변경이 되면 해당에러 발생
            파이썬, JS가 이런면에서는 편리함 

            while(g1.size() > 0 && g2.size() > 0){
                
                if(g1.get(0) < g2.get(0)){
                    result.add(g1.remove(0));
                }
                else{
                    result.add(g2.remove(0));
                }
            } 
            
            while(g1.size() > 0){
                result.add(g1.remove(0));
            }
            
            while(g2.size() > 0){
                result.add(g2.remove(0));
            }

        */
        
        /* 
            해결법 
            그냥 remove를 안쓰고 인덱스 값으로 셋팅한다. -> 제일 간단한 방법 
        */
        int i = 0;
        int j = 0;
        while(g1.size() > i && g2.size() > j){
            if(g1.get(i) < g2.get(j)){
                result.add(g1.get(i));
                i++;
            }
            else{
                result.add(g2.get(j));
                j++;
            }
        } 
        
        while(g1.size() > i){
            result.add(g1.get(i));
            i++;
        }
        
        while(g2.size() > j){
            result.add(g2.get(j));
            j++;
        }
            
        return result;

    }
```

**[문제점 1]** sublist 메서드를 배열로 잘라서 각각의 변수로 직접 지정할 경우, 상위 배열의 값이 바뀔때 잘라서 변수로 지정된 배열의 값도 같이 바뀐다.

## 병합 정렬의 효용성
- 이런 방식의 큰 문제를 작은 문제로 나눠서(분할) 푸는(정복) 방식을 "분할 정복 방식"이라고 한다.
- 분할 정복 방식의 시간 복잡도는 O(n $\log{n}$) 으로 선택정렬 O($n^2$), 삽입정렬 최악의 경우 O($n^2$) 보다 낮은 복잡도를 가진다.
- 따라서 정렬해야 될 데이터가 많을 수록 병합정렬리 더 빠른 결과를 냄

## part3 공부하면서 배운 소소한 java 팁
### 1. 배열의 pop, push의 java기능 대응
```java
    |JS|            |JAVA|
    Array.push    -> ArrayList.add(Object o); // Append the list
    Array.pop     -> ArrayList.remove(int index); // Remove list[index]
    Array.shift   -> ArrayList.remove(0); // Remove first element
    Array.unshift -> ArrayList.add(int index, Object o); // Prepend the list
```
**[문제점 1]** 이런 식으로 하게 되면 java.util.ConcurrentModificationException 이 발생한다. 자바는 파이선,자바스크립트와 다르게 앞에서 부터 인덱스가 변경되면 엘리먼트의 인덱스가 실시간으로 변하지 않음. Length가 변경되면서 해당 인덱스의 값이 null 이 되어 해당 에러가 발생함. 반복문 상에서 remove를 사용할 수 없는 이유. add는 상관없음.
            
***즉 자바는 for, while 같이 루핑이 도는 와중에 루핑의 조건에 remove가 사용되어 인덱스가 실시간으로 변경이 되면 해당에러 발생. 파이썬, JS가 이런면에서는 편리함.*** 

### 2. ArrayList 분리 기능 파이썬 <-> JAVA
- 파이썬 
```python
    a = [];
    n = len(a);    
    mid = n//2 

    g1 = mergeSort(A[:mid]) 
    g2 = mergeSort(A[mid:])
```
- JAVA
```java
    List<Integer> arr = new ArrayList<Integer> arr;
    int mid = arr.size()/2;
    int end = arr.size();

    List<Integer> g1 = mergeSort(arr.subList(0, mid));
    List<Integer> g2 = mergeSort(arr.subList(mid, end));
```
**[주의!]** sublist 메서드를 배열로 잘라서 각각의 변수로 직접 지정할 경우, 상위 배열의 값이 바뀔때 잘라서 변수로 지정된 배열의 값도 같이 바뀐다.
```java
    //배열을 자르고 변수를 다르게 받는다고 해서 메모리까지 분리된게 아님. 
    //아래와 같이 사용을 하면 arr을 변경할 경우- g1. g2 까지 영향을 받음

    List<Integer> g1 = arr.subList(0, mid);
    List<Integer> g2 = arr.subList(mid, end);   
    
    //아래와 같이 사용해야 메모리 까지 완전히 분리가 됨 
    List<Integer> g1 = new ArrayList<>();
    List<Integer> g2 = new ArrayList<>();   
    g1.addAll(arr.subList(0, mid));
    g2.addAll(arr.subList(mid, end));

```