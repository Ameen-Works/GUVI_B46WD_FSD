//Arrow Function 
//Print odd numbers of an array

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let printOddArr = (arr) => {
    return (arr.filter((item) => {
        if (item % 2 !== 0) {
            return item;
        }
    })
    )
};

console.log(printOddArr(arr));

//capitalize the string array

strArr = ["mohamed", "arshath", "ameen"];
let capitalize = (arr) => {
    return arr.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    })
};

console.log(capitalize(strArr));

//Sum of all numbers in Array

let arrToSum = [102, 203, 304, 405];
let sum = 0;

let sumArray = (arr) => {
    arr.map((item) => {
        sum = sum + item;
    })
    return sum;
}
console.log(sumArray(arrToSum));

//return prime number

let primeArray=[1,2,3,5,6,7,8,9,11,13,21,23,47];


let IsPrime=(num)=>{
    let isPrime=true;
    if(num===1){
       return false;
    }
    else{
    for(let i=2;i<num;i++){
        if(num%i===0){
        isPrime=false;
       }
    }
    return isPrime;
}
}
let printPrime=(arr)=>{
    let primeNums=arr.filter((item)=>{
        return(IsPrime(item)? item:null);
    });
    return primeNums;
}
console.log(printPrime(primeArray));

//return palindrome strings from string array.

let strArray=["malayalam","pen","madam","ellille"];

let checkPalindrom=(str)=>{
    let isPalindrome=true;
    let len=str.length;
    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return isPalindrome=false;
        }
    }
    return isPalindrome;
}

let palindromeArray=(arr)=>{
    return (
        arr.filter((item)=>{if (checkPalindrom(item)) return item})
    );
}

console.log(palindromeArray(strArray));