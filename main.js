const openMenu = document.querySelector('.logo-text');
const closeMenu = document.querySelector('.close-x');
const mobileMenu = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
const data = {
  proj1: {
    name: 'Tonic',
    img: 'images/snapshoot4.png',
    companyName: 'CANOPY',
    job: 'Back End Dev',
    year: 2022,
    decription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css'],
    sourceLink: 'hhttps://github.com/rotshidzw/portfolio',
    demoLink: 'https://rotshidzw.github.io/portfolio/',
  },

  proj2: {
    name: 'Multi-Post Stories',
    img: 'images/snapshoot3.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2022,
    decription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css'],
    sourceLink: 'https://github.com/rotshidzw/portfolio',
    demoLink: 'https://rotshidzw.github.io/portfolio/',
  },

  proj3: {
    name: 'Facebook 360',
    img: 'images/snapshoot.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2022,
    decription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css'],
    sourceLink: 'hhttps://github.com/rotshidzw/portfolio',
    demoLink: 'https://rotshidzw.github.io/portfolio/',
  },
  proj4: {
    name: 'Uber Navigation',
    img: 'images/snapshoot1.png',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2022,
    decription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css'],
    sourceLink: 'hhttps://github.com/rotshidzw/portfolio',
    demoLink: 'https://rotshidzw.github.io/portfolio/',
  },
};

const nameID = document.getElementById('name');
const img = document.getElementById('img');
const companyName = document.getElementById('companyName');
const job = document.getElementById('job');
const year = document.getElementById('data');
const descrition = document.getElementById('descript');
const tags = document.getElementById('tags');
const sourceLink = document.querySelector('.btn-src-link');
const demoLink = document.querySelector('.btn-live');
const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const button4 = document.querySelector('#btn-4');
const btnClosePop = document.querySelector('.popup-btn');
const popupOverlay = document.querySelector('.popup-over');
const popup = document.getElementById('popup');

function openPopUp() {
  popup.classList.remove('hidden');
}

function changePopup(order) {
  tags.innerHTML = '';

  const proj = data[`proj${order}`];
  nameID.innerHTML = proj.name;
  img.src = proj.img;
  companyName.innerHTML = proj.companyName;
  job.innerHTML = proj.job;
  year.innerHTML = proj.year;
  descrition.innerHTML = proj.decription;
  const tagsLength = proj.tags.length;
  for (let i = 0; i < tagsLength; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${proj.tags[i]}`;
    tags.appendChild(element);
  }
  sourceLink.action = proj.sourceLink;
  demoLink.action = proj.demoLink;
  openPopUp();
  for (let i = 0; i < data.length; i += 1) {
    document.querySelector('popup').innerHTML = `
    <div class="card popup desktop">
      <div>
        <div class="card-content desktop">
          <h3 class="heading-secondary desktop">${proj[i].nameID}</h3>
          <span> <a onclick="closePopUp()" href="javascript:void(0)" class="popup-btn">X</a></span>
      </div>
      <ul class="card-info desktop">
      <li id="companyName">${proj[i].companyName}CANOPY</li>
      <li><img src="images/Counter.svg" alt="dot" class="card-info-dot" /></li>
      <li class="input-text" id="job"> ${proj[i].job} Back End Dev</li>
      <li><img src="images/Counter.svg" alt="dot" class="card-info-dot" /></li>
      <li class="input-text" id="data">${proj[i].year} 2022</li>
    </ul>
      </div>
      <div class="card-img desktop" id="img">
          <img src="${proj[i].img}" class="flex-item1" alt="${proj[i].nameID} proj screenshot"/>
          <img src="${proj[i].img}" class="desktop-item1" alt="${proj[i].nameID} proj screenshot"/>
      </div>
      <div class="desktop-pop">
          <div class="first">
            <p "sec-text mob desktop" id="descript">
              ${proj[i].descript}
            </p>
          </div>
          <div class="second">
              <ul "card-tags desktop" id="tags">
              ${tags}
              </ul>
              <ul class="line">
              ${tags}
              </ul>
              <div class="btn-element">
                <a href="${proj[i].seeLive}" class="btn-live">See Live
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <a href="${proj[i].seeSource}" class="btn-src-link">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
          </div>
      </div>
      </div>
  `;
  }
}

function closePopUp() {
  popup.classList.add('hidden');
}

button1.addEventListener('click', () => {
  openPopUp();
  changePopup(1);
});

button2.addEventListener('click', () => {
  openPopUp();
  changePopup(2);
});

button3.addEventListener('click', () => {
  openPopUp();
  changePopup(3);
});

button4.addEventListener('click', () => {
  openPopUp();
  changePopup(4);
});

popupOverlay.addEventListener('click', closePopUp);
btnClosePop.addEventListener('click', closePopUp);

const contactForm = document.querySelector('.contact_form');
const emailInput = document.querySelector('.email_address');
const validationMessage = document.querySelector('.validation_message');
contactForm.addEventListener('submit', (event) => {
  const strInput = emailInput.value;
  if (/[A-Z]/.test(strInput)) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});

contactForm.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.contact_name').value,
    email: document.querySelector('.email_address').value,
    message: document.querySelector('.contact_message').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactForm'));
document.querySelector('.contact_name').value = formObj.name;
document.querySelector('.email_address').value = formObj.email;
document.querySelector('.contact_message').value = formObj.message;