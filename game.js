let image=document.querySelectorAll(".img");

function random(){
  return Math.floor(Math.random()*3);
}

function strToNum(img){
  if(img.id=="i1"){
    return 0;
  }
  else if(img.id=="i2"){
    return 1;
  }
  else if(img.id=="i3"){
    return 2;
  }
}

game=[
  ["draw","win","loss"],
  ["loss","draw","win"],
  ["win","loss","draw"]
]

image.forEach(img=> {
  img.addEventListener("click",()=>{
    let r=random();
    let p=strToNum(img);
    let result=game[r][p];

    let id=document.getElementById("output");
    let player=document.getElementById("player");
    let computer=document.getElementById("computer");

    id.innerText=result;
    id.classList.remove("draw","win","loss");
    id.classList.add(result);

    if(result=="win"){
      player.innerText=Number(player.innerText)+1;
    }
    else if(result=="loss"){
      computer.innerText=Number(computer.innerText)+1;
    }
  });
});