// 并查集

// https://www.jianshu.com/p/fc17847b0a31

// https://blog.csdn.net/qq_41096610/article/details/107518140

// [[1,1,0], [1,1,0], [0,0,1]]
// 2
//  1 2 3
//1 1 1 0
//2 1 1 0
//3 0 0 1

const test = [[1,1,0], [1,1,0], [0,0,1]]
const test1 =  [[1,1,0], [1,1,1], [0,1,1]] 

function countCircle(list) {
    let res = 0
    let visited = Array.from(list.length).fill(0);

    for(let i = 0; i < list.length; i++) {
        if(visited[i] !== 1) {
            visited[i] = i
            dfs(i)
            res++
        }
    }

    function dfs(i) {
        for(let j = 0; j < list.length; j++) {
            if(
                i !== j &&
                visited[j] !== 1 &&
                list[i][j] === 1
            ) {
                visited[j] = 1
                dfs(j)
            }
        }
    }
    return res
}

const res = countCircle(test1)

console.log('lly-log -- res --->', res);