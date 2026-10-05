// Floating Hearts
for(let i=0;i<30;i++){

    const heart=document.createElement("div");

    heart.className="heart";
    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(18+Math.random()*30)+"px";
    heart.style.animationDuration=(5+Math.random()*6)+"s";
    heart.style.animationDelay=(-Math.random()*8)+"s";

    document.body.appendChild(heart);
}

// Canvas
const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}

resize();

window.addEventListener("resize",resize);

// Confetti Colors
const colors=[
    "#ff4f8b",
    "#ffd93d",
    "#6bcBef",
    "#4cd137",
    "#9b59b6",
    "#ff914d"
];

let confetti=[];

function createConfetti(amount=200){

    for(let i=0;i<amount;i++){

        confetti.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height-canvas.height,

            size:4+Math.random()*6,

            color:colors[Math.floor(Math.random()*colors.length)],

            speed:2+Math.random()*4,

            swing:Math.random()*Math.PI*2
        });
    }
}

createConfetti();

// Animation
function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(piece=>{

        ctx.fillStyle=piece.color;

        ctx.fillRect(
            piece.x,
            piece.y,
            piece.size,
            piece.size*1.5
        );

        piece.y+=piece.speed;
        piece.x+=Math.sin(piece.swing+=0.05);

        if(piece.y>canvas.height){

            piece.y=-20;
            piece.x=Math.random()*canvas.width;
        }

    });

    requestAnimationFrame(animate);
}

animate();

// Button Effect
function celebrate(){
    createConfetti(120);
}