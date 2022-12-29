var big = document.getElementById('main_txt');
var small = document.getElementById('follower_text');
let str1 = "a Full stack Developer trainee....";
let str = `Hey, I am Ayush Vashisht`;

function loop1() {
    for (let i=0; i<str.length; i++) {
        setTimeout(()=>{
            big.textContent += str[i];
        }, i*100);
    };
}


function loop2() {
    for (let i=0; i<str1.length; i++) {
        setTimeout(()=>{
            small.textContent += str1[i];
        }, i*100);
    };
}
 
loop1();
setTimeout(loop2, 2700);

 

