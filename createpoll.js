const form=document.getElementById('createpoll-form');
const alert=document.querySelector('.alert')
const pollname=document.getElementById('name');
const container=document.querySelector('.created-container')
const list=document.querySelector('.poll-list')
const number=document.getElementById('counted');
const type=document.getElementById('poll-type');
const submitBtn=document.querySelector('.submit-btn')
const pollList =document.querySelectorAll('.poll-list')
const btn = document.querySelectorAll(".question-btn");


form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    const pname=pollname.value
    const numb=number.value
  const poll_value=getpollValue();
  console.log(poll_value)
    const id = new Date().getTime().toString();
    if (pname && numb){
        createpollItem(id,pname,numb,poll_value);
        displayAlert('POLL CREATED','success');
        container.classList.add('show-container')
       setBackToDefault();
      }

     else {
       displayAlert("please enter all fields","danger")
     }
}
function getpollValue(){
  if (document.getElementById('r1').checked) {
   return( document.getElementById('r1').value);
  }
  else if (document.getElementById('r2').checked) {
   return( document.getElementById('r2').value);
  }
else{
 return( document.getElementById('r3').value);
}
}
function displayAlert(text,action){
    alert.textContent=text;
        alert.classList.add(`alert-${action}`)



        setTimeout(function () {
            alert.textContent='';
        alert.classList.remove(`alert-${action}`)
        
        },3000)
}
 function createpollItem(id,pname,numb,poll_value){
    const element= document.createElement('article');
    element.classList.add('polls');
    const attr = document.createAttribute('data-id');
    attr.value=id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title poll-name">${pname}</p>
    <span class="btn-container">
    <button type="button" class="question-btn">
    <span class="plus-icon">
        <i class="far fa-plus-square"></i>
    </span>
    <span class="minus-icon">
        <i class="far fa-minus-square"></i>
    </span>
</button>
</span>
    
    <div class="poll-info">
   <span> Number Of Option:${numb}</span>
   <span>Poll Type:${poll_value}</span>
</div>`;
const plus = element.querySelector('.question-btn')
const info = element.querySelectorAll('.poll-info');
const title = element.querySelectorAll('.title')
plus.addEventListener('click',function(){
  title.forEach(function(){
    info.forEach(function(infoitem){
      infoitem.classList.toggle('show-text');

    });
    target= element.parentNode;
    target.classList.toggle('show-text');
  }
  )
})
  list.appendChild(element);



 }
 function setBackToDefault(){
    pollname.value='';
    number.value='';
    submitBtn.textContent='submit';
    // console.log('set back to default')
}
function add(e){
 console.log('here')

}