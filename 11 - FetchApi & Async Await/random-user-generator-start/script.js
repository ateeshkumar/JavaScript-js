const buton = document.getElementById('generate');

function fetchData(){
    showSpinner();
    fetch('https://randomuser.me/api')
    .then((res)=>res.json())
    .then((data)=>{
      hideSpinner();
        
        display(data.results[0]);
    })
}
function display(data){
    const userdisplay = document.querySelector('#user');

    userdisplay.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              id="image"
              class="w-48 h-48 rounded-full mr-8"
              src=${data.picture.medium}
            />
            <div class="space-y-3" style="color: blue;">
              <p class="text-xl">
                <span id="name" class="font-bold">Name: </span>${data.name.first} ${data.name.last}
              </p>
              <p class="text-xl">
                <span id="email" class="font-bold">Email: </span> ${data.email}
              </p>
              <p class="text-xl">
                <span id="phone" class="font-bold">Phone: </span> ${data.phone}
              </p>
              <p class="text-xl">
                <span id="location" class="font-bold">Location: </span> ${data.location.street.number} ${data.location.street.name}
              </p>
              <p id="age" class="text-xl"><span class="font-bold">Age:  </span>${data.dob.age}</p>
            </div>
          </div>
        </div>
    `;
}
function showSpinner(){
  document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner(){
  document.querySelector('.spinner').style.display = 'none';
}
buton.addEventListener('click',fetchData);
