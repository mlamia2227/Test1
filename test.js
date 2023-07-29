

// Test1 ()

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin


let fullName = 'Lamiə Mehdiyeva Fərman';

console.log(fullName.split());
console.log(fullName.split(""));

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

// changeName = fullName.split(" ");

// console.log(changeName)

// const fromIndex = changeName.indexOf('Lamiə, Mehdiyeva, Fərman'); 
// const toIndex = 1;

// const element = changeName.splice(0, 1)[0];
// console.log(element);

// changeName.splice( toIndex, 0, element,);

// console.log(changeName); 

//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin;

// newString = changeName.toString();
// console.log(newString);



let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// let string = arr.toString();
// console.log(string.match(5));

// let numberFive = /5/g;
// console.log(string.match(numberFive));

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// let arrSort = arr;

// console.log(arrSort.sort())

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

// let arrSort = arr;

// console.log(arrSort.slice(-1))

// let target = 7;

// let counter = 0;
// for (repeatNum of arr) {
//   if (repeatNum == target) {
//         counter++;
//     }
// };

// console.log(counter); 

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

// let min = 1;
// let max = 10;

// let newRandom = Math.floor(Math.random() * (max - min +1) + min);

// console.log(newRandom);

// console.log(arr.includes(10))

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var

// let myName = 'Lamia';

// nameSplit = myName.split('');
// console.log(nameSplit);

// console.log(nameSplit.length);

// console.log(arr.includes(5));

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

// let newNumber = arr;
// console.log(newNumber.find(e => e % 3 === 2));
// console.log(newNumber[5])

//11) arraydaki en boyuk reqemin ilk indexini tapin

// let bigNumber = Math.max(...arr);

// let index = arr.indexOf(bigNumber);
// console.log(index);

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let indexNum4 = [];

// arr.filter(function (array, index) {
//     if (array == 4) {
//         indexNum4.push(index)
//     }
// });
// console.log(indexNum4)

//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let number5Max = Math.max(5);
// let indexMax = arr.indexOf(number5Max);
// console.log(indexMax);

// let number5Min = Math.min(5);
// let indexMin = arr.lastIndexOf(number5Min);
// console.log(indexMin);

//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// let myNewArray = [4, 3, 7, 6, 7, 3, 5, 5, 6, 3, 6, 5, 3,  7, 4, 6, 4]

// console.log(arr.length-myNewArray.length);

//15) 7 reqeminin indexleri cemini tapin.

// let indexNum7 = [];

// arr.filter(function (array, index) {
//     if (array == 7) {
//         indexNum7.push(index)
//     }
// });
// console.log(indexNum7)

// let sum = 0;

// for (let i = 0; i < indexNum7.length; i++) {
//     sum += indexNum7[i];
// }

// console.log(sum) 

// /////////////////////////////////////////////////////
// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ];

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin


// let newArray = arr2.filter(element => element.name.startsWith(letter = 't'));
// console.log(newArray);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// let newArray2 = arr2.filter(element => element.name.startsWith(letter = 't') && element.name.endsWith(letter = 't'));
// console.log(newArray2);


// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let add = 0;
// for (let i = 0; i < newArray2.length; i++) {
//     add += newArray2[i].key;
// }
// console.log(add);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// let newArray = arr2.filter(element => element.name.endsWith(letter = 'e'));
// console.log(newArray);
// const newArr = newArray.map(element => {
//   if ( element.name.endsWith(letter = 'e')) {
//     return 'SuperDev';
//   }
// });
// console.log(newArr);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

// let nameLength4 = arr2.filter(element => element.name.length === 4);
// console.log(nameLength4);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// newFunction();

// function newFunction() {
//     let maxKey = 0;
//     let maxObjName;

//     arr2.forEach(element => {
//         if (element.key > maxKey) {
//             maxKey = element.key;
//             maxObjName = element;
//         }
//     });

//     console.log(maxKey);
//     console.log(maxObjName);
// }

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// let text = arr2.toString();

// let nameLength = arr2.filter(element => element.name.match(/(\^l)/gi));

// console.log(nameLength)


// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
];

[arr2[0], arr2[1]] =
    [arr2[1], arr2[0]];

console.table(arr2);

