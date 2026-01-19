let  button = document.querySelectorAll(".btn");

console.log(button[0])

let para = document.getElementsByClassName("text");

console.log(para[0]);

button[0].addEventListener("click", function() {
    para[0].style.display = "none";
})




