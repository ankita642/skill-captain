let Form = document.querySelector(".Myform")

let email = document.querySelector('.email')

let Name = document.querySelector('.name')

let error = document.querySelector('.error')

Form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log(email.value)
    console.log(Name.value)

    if (email.value === '' || Name.value === '') {
        error.style.color = 'red';
        error.textContent = 'All fields are required.';
    }
    
} 