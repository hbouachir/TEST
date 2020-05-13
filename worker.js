​
const byname=document.querySelector('.byname');
const ages=document.querySelectorAll('.age');
const chercher=document.querySelector('.search');
let liste=document.querySelector('#work_list');
const workersList = document.querySelector('.container')
​
var myage='';
var inn='';
byname.addEventListener('change',function(e){
inn=e.target.value;
​
​
})
Array.from(ages).map(el=>el.addEventListener('click',function(){
myage=el.value;
​
​
})
)
​
JSON.parse(localStorage.getItem('workers')).map(el=>{
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
​
  
  let container=document.createElement('div')
  
  container.innerHTML=structure
  liste.append(container)
  
  })
​
var a=JSON.parse(localStorage.getItem('workers'))
var h=[]
chercher.addEventListener('click',function(e){
  e.preventDefault()
 
    switch(myage) {
        case "30":
           h=a.filter(el=>Number(el.age)<=30 && el.Name.toUpperCase().includes(inn.toUpperCase()))
            break;
        case "60":
            h=a.filter(el=>((Number(el.age)>30)&&(Number(el.age)<=60)) && el.Name.toUpperCase().includes(inn.toUpperCase()))
            break;
          case "100":
            h=a.filter(el=>Number(el.age)>60 && el.Name.toUpperCase().includes(inn.toUpperCase()))
            break;
        default:
         h=a
      }
​
console.log(h)  
​
    liste.remove()
    liste = document.createElement('div')
    liste.id = "work_list"
    workersList.append(liste)
    h.map(el=>{
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
        
        })
​
})
​
​
​
​
​
const buttons=document.querySelectorAll('button');
const xbtn=Array.from(buttons).filter(el=>el.className==='btn-delete');
​
​
xbtn.map(el=>el.addEventListener('click',function(){
  let y=Array.from(JSON.parse(localStorage.getItem('workers')));
  let z=el.parentElement.children[0].innerText;
  let a=y.filter(word=>word.Name!==z);
   
  console.log(z)
  el.parentElement.remove();
  localStorage.setItem('workers', JSON.stringify(a))
  h=a
​
}))
