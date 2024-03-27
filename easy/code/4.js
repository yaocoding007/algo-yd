// https://leetcode.cn/problems/jump-game-iii/

const foo = [4, 2, 3, 0, 3, 1, 2]
const start = 5


const canReach = (arr, start) => {
    if(arr.indexOf(0) === -1) {
        return false
    }
    
    let memo = new Array(arr.length)
    const dfs = (index) => {
        if(index < 0 || index >= arr.length) {
            return false
        }
        if(memo[index]) {
            return false
        }
        if(arr[index] === 0) return true;
        memo[index] = true
        return dfs(index + arr[index]) || dfs(index - arr[index])
    }
    return dfs(start)
}


console.log('lly-log -- res --->', canReach(foo, start));

