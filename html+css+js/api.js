fetch("https://jsonplaceholder.typicode.com/users")
.then( response => response.json())
.then( data => {

    console.log(data);
})
.catch(error=> {
    console.log("error is as follows : ", error)

})



fetch("https://jsonplaceholder.typicode.com/users")
.then( response => response.json())
.then( user => {
    let list = document.querySelector(".list");

    user.forEach( user => {
        let li = document.createElement('li')
        li.textContent = user.name;
        list.appendChild(li)
    }
)
}
)
.catch(error => {
    console.log("error is as follows : ", error)
}

) 