import './styles/main.scss'
new Vue({
  el: '#vue-form',
  data() {
    return {
      someVar: 5,
      loremFinalList: [],
      loremList: [
        {
          title: 'Lorem Ipsum is simply dummy text',
          description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 0,
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting'
          ]
        },
        {
          title: 'Lorem Ipsum is simply dummy text',
          description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 1,
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic',
            'It was popularised in the 1960s'
          ]
        },
        {
          title: 'Lorem Ipsum is simply dummy text',
          description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 2,
          list: [
            'Lorem Ipsum has been the industry\'s standard dummy text ever since',
            'But also the leap into electronic typesetting'
          ]
        },
        {
          title: 'Lorem Ipsum simply',
          description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 3, 
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting'
          ]
        },
        {
          title: 'Lorem Ipsum simply',
          description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 4,
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting'
          ]
        }
      ]
    }
  },
  mounted(){
    while(this.someVar>0){
      const temp = Math.floor(Math.random() * Math.floor(5));
      if(this.loremFinalList.length === 0){        
        this.loremFinalList.push(this.loremList[temp]);
        this.loremFinalList[0]['specialId'] = 1;
        this.someVar--
      } else if(!this.loremFinalList.some(el => el.id===temp)){
        this.loremFinalList.push(this.loremList[temp]);
        this.someVar--
      }
    }
    console.log(this.loremFinalList);
  }
})

Vue.component('Item', {
  props: {
    curr_data: {
      type: Object,
      default(){
        return {}
      }
    },
  },
  template: '<div class="item"><div class="circle"></div><p class="title">{{curr_data.title}}</p><p class="description">{{curr_data.description}}</p><ul><li class="el" v-for="item in curr_data.list"><span>{{item}}</span></li></ul></div>',
})
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
    if(progressBar.value >= 100){
      footer.style.display = 'flex';
      vueForm.style.display = 'flex';
      btmForm.style.display = 'flex';
    }
 }

};

document.addEventListener('mousewheel', Visible);
Visible();


const name = document.querySelector('#form-name');
const phone = document.querySelector('#form-phone');
const email = document.querySelector('#form-email');

document.getElementById('main-btn').onclick = () => {
  if(name.value === '' || phone.value === '' || email.value === ''){
    if(name.value === '') document.querySelector('.name-sign').style.display = 'inline';
    if(phone.value === '') document.querySelector('.phone-sign').style.display = 'inline';
    if(email.value === '') document.querySelector('.email-sign').style.display = 'inline';
  } else {
    fetch('/form-sending', {method: 'POST'})
      .then(r => r.json())
      .catch(err => alert(err));
    
  }
}