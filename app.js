const toile = document.querySelector("#draw");
const ctx = toile.getContext("2d");
const DL = document.querySelector("#btnDL");


toile.width = window.innerWidth -15 ;
toile.height = window.innerHeight -200 ;

// parametres des lignes déssinées
ctx.strokeStyle = "black";
ctx.linejoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

let dessine = false;
let lastX = 0;
let lastY = 0;

// fonction téléchargement au clic
DL.addEventListener("click", ()=>{
// avoir un background blanc quand on télécharge le fichier
ctx.globalCompositeOperation = 'destination-over';
ctx.fillStyle = "white";
ctx.fillRect(0, 0, toile.width, toile.height);
// pouvoir DL l'image
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href =toile.toDataURL("image/jpeg");
    a.download = "image-miniPaint.jpg";
    a.click();
    document.body.removeChild(a);
})

// les eventslistener de chaques boutons de couleur. Change la couleur sélectionnée au clic, et affiche la couleur actuelle  (Il doit probablement y avoir mieux à faire)
rouge.addEventListener("click", () =>{
    ctx.strokeStyle = "red"
    now.style.backgroundColor= ctx.strokeStyle;
});
vert.addEventListener("click", () =>{
    ctx.strokeStyle = "green";
    now.style.backgroundColor= ctx.strokeStyle;
});
bleu.addEventListener("click", () =>{
    ctx.strokeStyle = "blue"
    now.style.backgroundColor= ctx.strokeStyle;
});
rose.addEventListener("click", () =>{
    ctx.strokeStyle = "pink"
    now.style.backgroundColor= ctx.strokeStyle;
})
jaune.addEventListener("click", () =>{
    ctx.strokeStyle = "yellow"
    now.style.backgroundColor= ctx.strokeStyle;
})
orange.addEventListener("click", () =>{
    ctx.strokeStyle = "orange"
    now.style.backgroundColor= ctx.strokeStyle;
})
marron.addEventListener("click", () =>{
    ctx.strokeStyle = "brown"
    now.style.backgroundColor= ctx.strokeStyle;
})
gris.addEventListener("click", () =>{
    ctx.strokeStyle = "grey"
    now.style.backgroundColor= ctx.strokeStyle;
})
noir.addEventListener("click", () =>{
    ctx.strokeStyle = "black"
    now.style.backgroundColor= ctx.strokeStyle;
})
gomme.addEventListener("click", () =>{
    ctx.strokeStyle = "white"
    now.style.backgroundColor= ctx.strokeStyle;
})

// boutons de choix du diametre du trait.
diam1.addEventListener("click", ()=>{
    ctx.lineWidth= 3
})
diam2.addEventListener("click", ()=>{
    ctx.lineWidth= 10
})
diam3.addEventListener("click", ()=>{
    ctx.lineWidth= 20
})
diam4.addEventListener("click", ()=>{
    ctx.lineWidth= 30
})
// fonction dessin, recupere les infos et les modifies en fonction du placement de la souris dans le canvas.
function draw(e){
    if (!dessine) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

}
// fait en sorte de déssiner uniquement quand le clic de la souris est enfoncé et dans le cadre.
toile.addEventListener("mousedown",(e) =>{
 dessine = true;
 [lastX,lastY] = [e.offsetX, e.offsetY];
});

toile.addEventListener("mousemove", draw);
toile.addEventListener("mouseup",() => dessine = false);
toile.addEventListener("mouseout",() => dessine = false);
