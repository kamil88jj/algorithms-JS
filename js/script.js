//ЧИСЛА ФИБОНАЧИ РЕШЕНИЕ №1 
function fibonc(num) {
    const result = [0, 1];

    for(let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];

        result.push(prevNum1 + prevNum2);
    }
    return result[num];
}

console.log(fibonc(6));




//ЧИСЛА ФИБОНАЧИ РЕШЕНИЕ №2 
function fibonacciShort(num) {
    let a = 1;
        b = 1;

    for(let i = 3; i <= num; i++){
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}
console.log(fibonacciShort(6));




//НАЙТИ ТОЛЬКО ОДНО НЕПАРНОЕ ЧИСЛО №1
const input = [4,2,1,2,1];

const singleNumber1 = function (nums) {
    let uniq = new Set();
        uniqSum = 0;
        numSum = 0;

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        }
        numSum += current;
    }

    return uniqSum * 2 - numSum;
};

console.log(singleNumber1(input));




//БИНАРНЫЙ ПОИСК
let array = [-1,0,3,4,5,7,12];

let search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left)/2) + left;

        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(search(array, 7));




//  ПРАВИЛЬНОЕ ПОСЛЕДОВАТЕЛЬНОСТЬ СКОБОК 
    let s1 = "()";
    let s2 = "()[]{}";
    let s3 = "(]";
    let s4 = "{[]}";
    let s5 = "([)]";
    let s6 = "{[[]{}]}()()";


    function isValid(s) {
        let stack = [];
        let brackets = {
            ')' : '(' ,
            ']' : '[' ,
            '}' : '{'
        };

        for (let i = 0; i < s.length; i++) {
            const current = s[i];

            if(isClosedBracket(current)) {
                if (brackets[current] !== stack.pop()) return false;
            } else {
                stack.push(current);
            }
        }

        return stack.length === 0;
    }

    function isClosedBracket (ch) {
        return [')', '}', ']'].indexOf(ch) > -1;
        }

console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));




//ПАЛИНДРОМ 
function isPalindrome(numberString) {

    let arr = numberString.split('');
    let isPalindrome = true;
    

    for(let i =0; i < arr.length; i++) {
        let elem = arr[i];

        if(elem !== arr[arr.length - 1 - i]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome('1235355'));
console.log(isPalindrome('10022001'));




//ПАЛИНДРОМ СО СТРОКАМИ 
function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}


console.log(palindrome('Racecar'));
console.log(palindrome('Table'));
console.log(palindrome('А роза упала на лапу Азора'));





//АНАГРАМA
function buildObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
}

function anagram(strA, strB) {
    const aCharObj = buildCharObject(strA);
    const bCharObj = buildCharObject(strB);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false;
    }

    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) {
            return false;
        }
    }
    return true;
}

// OneLiner
const anagram2 = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));