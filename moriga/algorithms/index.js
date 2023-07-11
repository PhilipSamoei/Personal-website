
//bubble sort is to arrange arr in ascending order
// function bubbleSort(arr){
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++){
//             if (arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }

//     }while (swapped);
// }

// const arr = [ 56,77,-8,3,0,2,12,45,-45]
// bubbleSort(arr);
// console.log(arr);

// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let numberToInsert = arr[i]
//         let j = i -1
//         while (j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = numberToInsert
//     }
// }
// const arr = [ 56,77,-8,3,0,2,12,45,-45]
// insertionSort(arr);
// console.log(arr);

//  for (let i = 0; i < 5; i++){
//     console.log("hello world" + i)
      
//  }
// const arr = [1,2,3,"philip"]
// // adding data at the beginnig of arr use unshift
// arr.unshift(6)
// //adding data to the arr use push
// arr.push(4)
// //use .pop()  to remove data at the end of the array
// arr.pop()
// //use .shift() to remove data at the begining of the array
// arr.shift()
// // console.log(arr);
// for (const item of arr){
//     console.log(item)
// }


// map,filter,reduce,concat,slice and splice


//OBJECT
// const obj ={
//     name:"Philip",
//     age:18,
//     car:"Bentley Flying spur W12 twin turbo",

// }
// // to add info to the object use.notaation
// obj.course = "software engineering"
// // to delete info use delete
// delete obj.age
// console.log (obj)



//set
// differences between array and set is that array can have the same data repeated while set doesnt
// const set = new Set([1,2,3,4])
// // to add data to the set we use add
// set.add(5)
// //to check if the the set has some info/data we use has IT WILL PRINT TRUE OR FALSE
// console.log(set.has(5))
// // to delete 
// set.delete(5)
// // to check the number of data we use size
// console.log(set.size) 
// // to delete everything use clear()
// set.clear()
// for (const item of set){
//     console.log (item)
// }

//map
