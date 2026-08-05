function openGift(){

    let message = document.getElementById("message");
    let gift = document.querySelector(".gift");

    // gift animation
    gift.style.transform = "scale(1.1)";
    
    setTimeout(()=>{

        gift.style.transform = "scale(1)";

        message.style.display = "block";

        message.scrollIntoView({
            behavior:"smooth"
        });

        createHearts();

    },500);

}




function createHearts(){

    for(let i=0;i<25;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="0px";
        heart.style.fontSize=(15+Math.random()*25)+"px";
        heart.style.animation="heartFly 4s linear";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}


// heart animation add

let style=document.createElement("style");

style.innerHTML=`

@keyframes heartFly{

from{

transform:translateY(0);
opacity:1;

}

to{

transform:translateY(-100vh);
opacity:0;

}

}

`;

document.head.appendChild(style);
