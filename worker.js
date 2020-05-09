

const liste=document.querySelector('#work_list');

JSON.parse(localStorage.getItem('workers')).map(el=>{
let structure= `<div><h1>name   : ${el.Name}</h1><h3>age    :${el.age}</h3><h2>email :${el.email}</h2><p>biography : ${el.biography}</p></div>`
let container=document.createElement('div')

container.innerHTML=structure
liste.append(container)

})