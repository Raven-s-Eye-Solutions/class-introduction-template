(() => {
  init();
})();

async function init() {
  const dat = await getJson('/api/tomData');
  removeLoading();
  addTomToDom(dat);
}

async function getJson(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log());
}

function removeLoading () {
  document.body.innerHTML = '';
}

function addTomToDom (data) {
  const div = document.createElement('div');
  div.classList.add('container');

  const name = document.createElement('h1');
  name.classList.add('profile-name');
  name.innerText = data.name;
  div.appendChild(name);

  const img = document.createElement('img');
  img.classList.add('profile-img');
  img.setAttribute('src', data.img);
  div.appendChild(img);

  const bio = document.createElement('p');
  bio.classList.add('profile-bio');
  bio.innerText = data.bio;
  div.appendChild(bio);

  document.body.appendChild(div);

}