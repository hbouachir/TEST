



const liste=document.querySelector('#work_list');

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


let container=document.createElement('div')

container.innerHTML=structure
liste.append(container)

})

const buttons=document.querySelectorAll('button');
const xbtn=Array.from(buttons).filter(el=>el.className==='btn-delete');


xbtn.map(el=>el.addEventListener('click',function(){
    let y=Array.from(JSON.parse(localStorage.getItem('workers')));
    let z=el.parentElement.children[0].innerText;
    let a=y.filter(word=>word.Name!==z);
   
     localStorage.removeItem("workers");
    el.parentElement.remove();
    localStorage.setItem('workers', JSON.stringify(a))



}))