const fs = require('fs');
// const data = fs.readFileSync('file.txt');

// console.log(""+ data);


//replaces all the content written in your file with the content you give in the function
// fs.writeFile('file.txt', "Hello Again!", 'utf-8', (err)=>{
//     console.log('file modified');
// });


//appends the string you give in the function to your file instead of replacing it
fs.appendFileSync('file.txt', " Class is going on");
// console.log('file.txt');


// make directory
// fs.mkdir('dir1', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('directory formed');
// })


//remove dir
// fs.rmSync('dir1', { recursive: true, force: true });
// fs.rmSync('file.txt');


//rename a file
fs.rename('file.txt', 'file1.txt', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('File has been renamed.');
})

const p = '/home/mahak/Desktop/node-pr/file1.txt';
const path = require('path');

const dirname = path.dirname(p);

const extension = path.extname(p);

console.log(dirname);
console.log(extension);

//move the file from one dest to another
const oldPath = '/home/mahak/Desktop/node-pr/file1.txt';
const newDir = '/home/mahak/Desktop/node-pr/dir1';
const newPath = path.join(newDir, 'file1.txt');


// fs.cp(oldPath, newPath, { recursive: true }, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("Successfully moved!")
// });

// fs.unlinkSync('file1.txt', (err)=>{
//     if(err){
//         console.lof(err);
//     }
//     console.log("Successfully removed!")
// });
    

const http = require('http');
const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/login'){
        res.write('<html> <head> <title> node js class </title> </head> <body>');
        res.write('<h1> Hello, Login! </h1>');
        res.write('</body></html>');
        res.end();
    }
    else{
        fs.readFile('index.html', (err, data)=>{
            if (err) {
                res.writeHead(500);
                res.end('Error loading file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

        // res.write('<html> <head> <title> node js class </title> </head> <body>');
        // res.write('<h1> Hello, World! </h1>');
        // res.write('</body></html>');
    }
})

const port = 3002;
const host = 'localhost';

server.listen(port, host, (err)=> {
    if(err){
        console.log(err);
    }
    console.log(`Server is listening on http://${host}:${port}`);
});
