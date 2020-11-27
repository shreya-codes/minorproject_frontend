const form=document.getElementById('createpoll-form');
const alert=document.querySelector('.alert')
const pollname=document.getElementById('name');
const container=document.querySelector('.created-container')
const list=document.querySelector('.poll-list')
const number=document.getElementById('counted');
const type=document.getElementById('poll-type');
const submitBtn=document.querySelector('.submit-btn')

form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    const pname=pollname.value
    const numb=number.value
    const id = new Date().getTime().toString();
    if (pname && numb){
        createpollItem(id,pname);
        displayAlert('POLL CREATED','success');
        container.classList.add("show-container");
       setBackToDefault();
      }

     else {
       displayAlert("please enter all fields","danger")
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
 function createpollItem(id,pname){
    const element= document.createElement('article');
    element.classList.add('polls');
    const attr = document.createAttribute('data-id');
    attr.value=id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${pname}</p>
    <div class="btn-container">
      <button class="edit-btn" type="button">
        <i class="fas fa-edit">

        </i>
      </button>
      <button class="delete-btn" type="button">
        <i class="fas fa-trash">
          
        </i>
      </button>
    </div>`;
  list.appendChild(element);

 }
 function setBackToDefault(){
    pollname.value='';
    submitBtn.textContent='submit';
    // console.log('set back to default')
}