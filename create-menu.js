const fs = require('fs');
const path = require('path');

const dir = ['easy', 'medium', 'hard'];

let menu = '';

function getMdFiles(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, function (err, files) {
            if (err) {
                reject(err);
            } 
            files = files.filter(file => file.endsWith('.md'));
            resolve({
                [dir]: files
            });
        });
    });

}

// 在 dir 内 并且是文件夹
Promise.all(dir.map(file => getMdFiles(file))).then((res) => {
    // [ { easy: [ '3-岛屿数量.md' ] }, { hard: [] }, { medium: [] } ]
    res.forEach(item => {
        const key = Object.keys(item)[0];
        const value = item[key];
        menu += `## ${key}\n\n`;
        value.forEach(file => {
            menu += `- [${file}](./${key}/${file})\n`;
        });
        menu += '\n';
    });
    fs.writeFileSync('README.md', menu);
    console.log('～～～～～～ -- 目录创建完成 -- ～～～～～～');
});