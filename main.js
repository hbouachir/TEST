const btn_add=document.querySelector(".add_worker")
const details=document.querySelectorAll(".worker")
console.log(details);
let infos;
Array.from(details).map(el=>{
    el.addEventListener('change',function(e){
           infos={...infos,
            [e.target.placeholder]:e.target.value}
           



            }
            )  }
    
    )

 if(!localStorage.key(0)){localStorage.setItem('workers', JSON.stringify([]))}

btn_add.addEventListener('click',function(){
   
    let  allInfos=Array.from(JSON.parse(localStorage.getItem('workers')));
    allInfos=[...allInfos,infos];
  
localStorage.setItem('workers', JSON.stringify(allInfos))

})


