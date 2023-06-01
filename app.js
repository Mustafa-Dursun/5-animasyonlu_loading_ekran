const loadText = document.querySelector('.loading');
const bg = document.querySelector('.bg');


let load = 0;
let int = setInterval(bluring, 30)

function bluring(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    // console.log(load);
   loadText.innerHTML = `${load}%`;
   if(load == 100){
    loadText.style.display ="none";
   }

}





