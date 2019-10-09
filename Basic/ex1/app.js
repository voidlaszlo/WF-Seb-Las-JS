let employees = [
    {
        "id" : 1,
        "first_name" : "Laszlo",
        "last_name" : "Sandor",
        "email" : "@.com",
        "job_title" : "something",
        "salary" : 2000        
    },    
    {
        "id" : 2,
        "first_name" : "Laszlo2",
        "last_name" : "Sandor2",
        "email" : "@.com2",
        "job_title" : "something2",
        "salary" : 3000        
    },    
    {
        "id" : 3,
        "first_name" : "Laszlo3",
        "last_name" : "Sandor3",
        "email" : "@.com3",
        "job_title" : "something3",
        "salary" : 3000        
    },    
]


function render() {
    let table = document.querySelector('.table')
    table.innerHTML = ""

    for (let employee of employees) {
        table.innerHTML += `<p>Employee ${employee.id} : ${employee.first_name} ${employee.last_name}</p>`
    }
    
}

render()