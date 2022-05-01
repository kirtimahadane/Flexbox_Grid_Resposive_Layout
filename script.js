
const menuBtn= document.querySelector('.menu-btn');
const navList= document.querySelector('.nav-list');
  
const toggleMenu=()=>{
  
  
navList.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleMenu);
