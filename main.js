const btn_add=document.querySelector(".add_worker")
const details=document.querySelectorAll(".worker")

let infos;
Array.from(details).map(el=>{
    el.addEventListener('change',function(e){
           infos={...infos,[e.target.placeholder]:e.target.value}
            }
            )  }
    
    )




btn_add.addEventListener('click',function(){
    let allInfos=JSON.parse(localStorage.getItem('workers'))
    
    allInfos=[...allInfos,infos]

    localStorage.setItem('workers', JSON.stringify(Infos));




})


