let toggle = document.querySelector('.toggle-btn');
let collapse = document.querySelectorAll('.collapse');

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle('collapse-toggle'));
})


