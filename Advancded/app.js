let employees = [
    {
        "id" : 1,
        "first_name" : "Laszlo",
        "last_name" : "Sandor",
        "img" : "https://picsum.photos/200"      
    },    
    {
        "id" : 2,
        "first_name" : "Laszlo2",
        "last_name" : "Sandor2",
        "img" : "https://picsum.photos/200"       
    },    
    {
        "id" : 3,
        "first_name" : "Laszlo3",
        "last_name" : "Sandor3",
        "img" : "https://picsum.photos/200"        
    },    
]

let showEmp = document.getElementById("showEmp");
showEmp.innerHTML = " ";

for (let emp of employees){
    showEmp.innerHTML += `Employee: ${emp.first_name} ${emp.last_name} <img src="${emp.img}"><br>`
}