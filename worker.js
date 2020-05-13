
const byname=document.querySelector('.byname');
const ages=document.querySelectorAll('.age');
const chercher=document.querySelector('.search');
const liste=document.querySelector('#work_list');

var myage='';
var inn='';
byname.addEventListener('change',function(e){
inn=e.target.value;


})
Array.from(ages).map(el=>el.addEventListener('click',function(){
myage=el.value;


})
)


var a=JSON.parse(localStorage.getItem('workers'))
var h=[]
chercher.addEventListener('click',function(){
    localStorage.setItem('inn', JSON.stringify(inn))
    localStorage.setItem('myage', JSON.stringify(myage))
 
  let x=JSON.parse(localStorage.getItem('inn'))
    let y=JSON.parse(localStorage.getItem('myage'))
    switch(y) {
        case "30":
           return{ h=a.filter(el=>el.age<=30)}
          break;
        case "60":
            return{  h=a.filter(el=>((el.age>30)&&(el.age<=60)))}
          break;
          case "100":
              return{
            h=a.filter(el=>el.age>60)}
          break;
        default:
         h=a
      }


console.log(h)
/*
    h.filter(el=>((el.Name.includes(x))).map(el=>{
        let structure=`<div class="card1">
        <h1> ${el.Name}</h1>
        <p class="title">${el.age} years old </p>
        <p>${el.email}</p>
        <p>${el.biography}</p>
        
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-facebook"></i></a>
        <button class="btn-delete">X</button>
        </div>`
    
        
        let container=document.createElement('div')
        
        container.innerHTML=structure
        liste.append(container)
        
        }))
        
*/

})





const buttons=document.querySelectorAll('button');
const xbtn=Array.from(buttons).filter(el=>el.className==='btn-delete');


xbtn.map(el=>el.addEventListener('click',function(){
    let y=Array.from(JSON.parse(localStorage.getItem('workers')));
    let z=el.parentElement.children[0].innerText;
    let a=y.filter(word=>word.Name!==z);
   
   
    el.parentElement.remove();
    localStorage.setItem('workers', JSON.stringify(a))


}))

