
const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

// 0,0 0,1 0,2  
// 1,0 1,1 1,2
// 2,0 2,1 2,2

/**
 * 思路:
 * 1. 从任意一个为1的点开始 dfs 并标记为 '2' 
 *   只到上下左右没有为1 的点
 * 2. 查找另一个为1的点 重复上一个 结果+1
 */


function dfs(grid, x, y) {

    if(!(
        x >= 0 && x < grid.length && y >= 0 && y < grid[0].length
    )) {
        return
    }
    
    if(grid[x][y] !== '1') {
        return
    }

    grid[x][y] = '2'

    dfs(grid, x - 1, y)
    dfs(grid, x + 1, y)
    dfs(grid, x, y + 1)
    dfs(grid, x , y - 1)

}


function numIslands(grid) {
    // [] || [[]]
    if(grid.length === 0 || grid[0].length === 0) {
        return
    }

    let count = 0;
    const row = grid.length;
    const column = grid[0].length;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(grid[i][j] === "1") {
                dfs(grid, i, j)
                count++;
            }
        }
    }

    return count;

}

const res = numIslands(grid)

console.log('lly-log -- res --->', res);