// var a=Math.floor(Math.random()*6+1);
// var a1="images/dice"+a+".png";
// document.querySelector(".img1").setAttribute("src",a1);

// var b=Math.floor(Math.random()*6+1);
// var b2="images/dice"+b+".png";
// document.querySelector(".img2").setAttribute("src",b2);

function randomfun(){
    var a=Math.floor(Math.random()*6+1);
    return a;
}

function setimage(a,e){
    var a1="images/dice"+a+".png";
   
    if(e==0){
        document.querySelectorAll("img")[0].setAttribute("src",a1);
    }else if(e==1){
        document.querySelectorAll("img")[1].setAttribute("src",a1);
    }else if(e==2){
        document.querySelectorAll("img")[2].setAttribute("src",a1);
    }else{
        document.querySelectorAll("img")[3].setAttribute("src",a1);
    }

}
setTimeout(function(){
var a=randomfun();
setimage(a,0);

var b=randomfun();
setimage(b,1);

var c=randomfun();
setimage(c,2);

var d=randomfun();
setimage(d,3);
if(a==b&&b==c&&c==d){
    document.querySelector("h1").innerHTML="Draw";
}
else if(a>b&&a>c&&a>d){
    document.querySelector("h1").innerHTML="1 Player wins!";
}else if(b>a&&b>c&&b>d){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}else if(c>a&&c>b&&c>d){
    document.querySelector("h1").innerHTML="3 Player wins!";
}else if(a==b||a==c||a==d||b==c||b==d||c==d){
    document.querySelector("h1").innerHTML="Move again";
}
else{
    document.querySelector("h1").innerHTML="Player 4 wins!";
}

},1000)

// if(a==1){
//     
// }else if(a==2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(a==3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(a==4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(a==5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }

// if(b==1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }else if(b==2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(b==3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(b==4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(b==5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }


