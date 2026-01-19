async function getdata() {

    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json()

    console.log(data)
    let list = document.querySelector(".list")

    user.forEach( user =>
    {

    let entity= document.createElement("li")
    entity.textContent = user.name;
    list.appendChild(entity)
    }
)
}