    //  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// const change = (letter) => {
//     return letter.join().toLowerCase().replaceAll("а","я")
// }

// console.log(change(['Аскар', 'Баяман', 'Калмамат']))


    // task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// const alphabet = (letter) => {
//     return letter.split('').sort().join()
// }

// console.log(alphabet("qwertyu"))


    // task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
// const even = (num) => {
//     return num.filter((el) => {
//         return el % 2 === 0
//     })
// }

// console.log(even([1,2,3,4,5,6]))


    // task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
// const arr = (num) => {
//     return num.filter((el) => {
//         return typeof el === "number"
//     })
// }
// console.log(arr([1,2,3,4,"r","t","y","s"]))


    // task 5 Напишите функцию, которая принимает массив и возвращает:

//Минимальный элемент
// const minimal = () => {
//     return Math.min(7, 13, 3, 77, 100)
// }
// console.log(minimal())

//Максимальный элемент
// const maximal = () => {
//     return Math.max(7, 13, 3, 77, 100)
// }
// console.log(maximal())

//Длину массива
// const weght = (letter) => {
//     return letter.join().split(",").length
// } 
// console.log(weght([7, 13, 3, 77, 100]))

//Среднее арифметическое
// const average = (letter) => {
//     return letter.reduce((acc,rec) => {
//         return acc + rec
//     }, 0) / letter.length
// }
// console.log(average([7, 13, 3, 77, 100]));


//Ответ должен быть в виде массива

//Пример входных данных: [7, 13, 3, 77, 100]

// Результат: [ 3, 100, 5, 40 ]

// const arr = (array) => {
//     return `${Math.min(7, 13, 3, 77, 100)} ${Math.max(7, 13, 3, 77, 100)} ${array.join().split(",").length} ${array.reduce((acc,rec) => {
//                 return acc + rec
//             }, 0) / array.length}`.split(" ")
// }
// console.log(arr([7, 13, 3, 77, 100]))

    // task 6 Напишите функцию, которая принимает массив чисел и возвращает первое четное число.
// const even = (letter) => {
//     return letter.find((el) => {
//         return el % 2 === 0
// })
// }
// console.log(even([1,2,3,4,5,6,7]))


    //task 7
// const arr = (letter) => {
//     return letter.join().split(" ").map((el) => {
//         return `${el} ${el.length}`
//     })
// }
// console.log(arr(["яблоко запрет"]))


    //task 8
// const arr = (letter) => {
//     return letter.filter((el,idx) => {
//         return idx % 2 === 0
//     })
// }
// console.log(arr(["Keep", "Remove", "Keep", "Remove", "Keep"]))


    //task 9 
// const stringToArray = (string) => {
//     return string.split(" ")
// }
// console.log(stringToArray("Robin Singh"))


    //task 10
// const sumStr = (a,b) => {
//     let str = +a + +b
//     return str.toString()
// }
// console.log(sumStr("4","5"))


    //task 11
// const distinct = (a) => {
//     return a.filter((el,idx) => {
//         return idx === a.indexOf(el)
//     })
// }
// console.log(distinct([1,2,3,4,4,5,6,6,7,8]))


    //task 12
// const fizzbuzz = (n) => {
//     return n.map((el) => {
//         if(el % 5 === 0 && el % 3 === 0){
//             return "fizzbuzz"
//         }else if(el % 5 === 0){
//             return "buzz"
//         }else if(el % 3 === 0){
//             return "fizz"
//         }else{
//             return el
//         }
//     })
// }
// console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))






