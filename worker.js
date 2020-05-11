



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
<button>X</button>
</div>`


let container=document.createElement('div')

container.innerHTML=structure
liste.append(container)

})