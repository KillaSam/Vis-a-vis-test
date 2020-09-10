import './styles/main.scss'
const progressBar = document.getElementById('pro');
const footer = document.querySelector('.my-footer');
const vueForm = document.querySelector('.vue-staff');
const btmForm = document.querySelector('.super-form');

progressBar.value = 0;
footer.style.display = 'none';
vueForm.style.display = 'none';
btmForm.style.display = 'none';

const Visible = function () {
 if (btmForm.clientWidth === 0 && document.querySelector('.super-slider').getBoundingClientRect().top <= 0){   
   console.log();
   document.addEventListener("mousewheel", function(){ progressBar.value += 0.1; })  
    if(progressBar.value === 100){
      footer.style.display = 'flex';
      vueForm.style.display = 'block';
      btmForm.style.display = 'flex';
    }
 }

};


document.addEventListener('mousewheel', Visible);
Visible();