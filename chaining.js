
const output = document.getElementById('output')
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(output.innerHTML+=integers.sort((a,b)=>{return b-a}).splice(4).map((a)=>{return a * 1.5-1}).reduce((a,b)=>{return a+b}));



