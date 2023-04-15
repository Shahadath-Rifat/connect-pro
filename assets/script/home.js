'use strict';


const displayTxt = document.querySelector('#display-txt');
const postFile = document.querySelector('#post-file');
const fileName = document.querySelector('#file-name');
const uploadBtn = document.querySelector('#upload-button');
const displayGrid = document.querySelector('.display-grid');

const userList = document.getElementById('user-random');

postFile.addEventListener('input', function() {
    const imageFile = postFile.files;
    for (let file of imageFile) {
        fileName.innerHTML = `${file.name}`;
    }
});

uploadBtn.addEventListener('click', function() {
    const textVal = displayTxt.value;
    const imageFile = postFile.files;

    if (textVal.length <= 0 && imageFile.length <= 0) {
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('post');
    
    addContent(newDiv);

    displayGrid.insertBefore(newDiv, displayGrid.firstChild);
});

function addContent(div) {
    const postHead = document.createElement('div');
    postHead.classList.add('post-head');

    const date = new Date();
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);

    postHead.innerHTML = `<div><img src="./assets/image/main white finished.png" alt="user-icon">Fabricio Mamani</div><p>${formattedDate}</p>`;

    div.append(postHead);

    const postBody = document.createElement('div');
    postBody.classList.add('post-body');
    postBody.innerText = displayTxt.value;

    div.append(postBody);

    if (postFile.files.length > 0) {
        const file = postFile.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.addEventListener('load', function() {
            const image = document.createElement('img');
            image.src = reader.result;
            div.append(image);
        });
    }
    displayTxt.value = '';
    fileName.innerHTML = ``;
    postFile.value = '';
};postFile.addEventListener('input', function() {
    const imageFile = postFile.files;
    for (let file of imageFile) {
        fileName.innerHTML = `${file.name}`;
    }
});

uploadBtn.addEventListener('click', function() {
    const textVal = displayTxt.value;
    const imageFile = postFile.files;

    if (textVal.length <= 0 && imageFile.length <= 0) {
        return;
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('post');
    
    addContent(newDiv);

    displayGrid.insertBefore(newDiv, displayGrid.firstChild);
});

function addContent(div) {
    const postHead = document.createElement('div');
    postHead.classList.add('post-head');

    const date = new Date();
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    const formattedDate = date.toLocaleDateString('en-US', options);

    postHead.innerHTML = `<div><img src="./assets/image/Self-image.jpeg" alt="user-icon">SH Rifat</div><p>${formattedDate}</p>`;

    div.append(postHead);

    const postBody = document.createElement('div');
    postBody.classList.add('post-body');
    postBody.innerText = displayTxt.value;

    div.append(postBody);

    if (postFile.files.length > 0) {
        const file = postFile.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.addEventListener('load', function() {
            const image = document.createElement('img');
            image.src = reader.result;
            div.append(image);
        });
    }
    displayTxt.value = '';
    fileName.innerHTML = ``;
    postFile.value = '';
};



fetch('https://randomuser.me/api/?results=11')
  .then(response => response.json())
  .then(data => {
    
    data.results.forEach(user => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const name = document.createElement('p');
      const city = document.createElement('p');

      img.src = user.picture.thumbnail;
      name.textContent = `${user.name.first} ${user.name.last},`;
      city.textContent = `${user.location.city}`;
      li.appendChild(img);
      li.appendChild(name);
      li.appendChild(city);
      userList.appendChild(li);
    });
  })
  .catch(error => console.error(error));