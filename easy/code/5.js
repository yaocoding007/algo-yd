

// const str = 'A man, a plan, a canal: Panama'
// const str = 'race a car'

// 会有 超时的case  需要再研究一下

function foo(str) {
    const arr = str.toLowerCase().match(/[a-z]/g);
    let left = 0; let right = arr.length - 1;
    while(left !== right) {
        if(arr[left] !== arr[right]) {
            return 0
        }
        left++;
        right--;
    }
    return 1
}

function bar(str) {
    const origin = str.toLowerCase().match(/[a-z]/g).join('')
    const target = arr.split('').reverse().join('')
    return origin === target ? 1 : 0
}

console.log(foo('race a car'))