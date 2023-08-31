let form = document.getElementById('form');
let input = document.getElementById('input');
let result = document.getElementById('result');
let lists = document.getElementById('lists');
let date = document.getElementById('date');
let time = document.getElementById('time');

form.addEventListener('submit',(e) => {
  e.preventDefault();

  formValidation();
});

let formValidation = () => {
  if(input.value === ''){
    result.innerHTML='**list cannot be empty**';
  }else{

    
    result.innerHTML=" ";
    acceptData();
  }
};
  
  let data = {};

  let acceptData =()=> {
    data['text'] = input.value;
    createlist();
  };
  
  let createlist = () => {
    lists.innerHTML += `
  <div>
    <p>${data.text} -- ${date.value} -- ${time.value} </p>
    <span class="options"><i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    <i onClick="deletePost(this)" class="fas fa-edit"></i>
    </span>
  </div>
  `;
  input.value ='';
  };

  let deletePost =(e)=>{
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
  
 
