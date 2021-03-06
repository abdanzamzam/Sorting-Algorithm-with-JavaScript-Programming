# Sorting Algorithm with JavaScript Programming
Sorting algorithm is an algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and for producing human-readable output. 

Following are some sorting algorithms:
### 1. Bubble Sort
It is the oldest sorting algorithm with the simplest sorting method. Sorting is done by comparing each item in a list in pairs, exchanging items if necessary, and repeating them to the end of the list sequentially, so that no more items can be exchanged.

![GitHub Logo](https://github.com/abdanzamzam/Sorting-Algorithm-with-JavaScript-Programming/blob/main/insertionSort.gif)
```js
let data = [6,5,3,1,8,7,2,4,10,1,6]

function bubbleSort(data) {
    let dummy = 0
    
    for (let i = 0; i < data.length; i++) {
        for (let j = data.length - 1; j > i; j--) {
            if (data[j] < data[j-1]) {
                dummy = data[j]
                data[j] = data[j-1]
                data[j-1] = dummy
            }
        }
    }
    return data
}

console.log(bubbleSort(data));

// Output
// [1,1,2,3,4,5,6,6,7,8,10]
```
### 2. Insertion Sort
The insertion sort algorithm basically sorts the data that will be sorted into two parts, the unordered and the sorted ones. The first element is taken from the unsorted portion of the array and then placed in its position in another part of the sorted array. This step is carried out repeatedly until there are no more elements left in the array that have not been sorted.

![GitHub Logo](https://github.com/abdanzamzam/Sorting-Algorithm-with-JavaScript-Programming/blob/main/bubbleSort.gif)
```js
let data = [6,5,3,1,8,7,2,4,12,8,3]

function insertionSort(data) {
    let dummy = 0
    
    for (let i = 1; i < data.length; i++) {
        for (let j = i; j > 0; j--) {
            if (data[j] < data[j-1]) {
                dummy = data[j]
                data[j] = data[j-1]
                data[j-1] = dummy
            }
        }
    }
    return data
}

console.log(insertionSort(data))

// Output
// [1,2,3,3,4,5,6,7,8,8,12]
```
### 3. Selection Sort
The main idea of the selection sort algorithm is to select the element with the lowest value and replace the selected element with the ith element. The value of i goes from 1 to n, where n is the total number of elements minus 1.

![GitHub Logo](https://github.com/abdanzamzam/Sorting-Algorithm-with-JavaScript-Programming/blob/main/selectionSort.gif)
```js
let data = [6,5,3,1,8,7,2,4,9,5,4]

function selectionSort(data) {
    let dummy = 0;
    let k = 0

    for (let i = 0; i < data.length; i++) {
        k = i
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[k]) {
                k = j
            }
        }
        dummy = data[i]
        data[i] = data[k]
        data[k] = dummy
    }
    return data
}

console.log(selectionSort(data))

// Output
// [1,2,3,4,4,5,5,6,7,8,9]
```
