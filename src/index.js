//import css and other page modules: 
import './style.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

//create buttons for the header:
function createButton(text, onClick) {
    const button = document.createElement('li');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

function createHeader() {
    const header = document.createElement('div'); 
    header.classList.add('header'); 

    const title = document.createElement('div'); 
    title.textContent = 'Pizzeria La Piazza'; 
    title.classList.add('title'); 

    const menuOptions = document.createElement('ul'); 
    menuOptions.append(
        createButton('Home', () => loadPage(loadHomePage)),
        createButton('Menu', () => loadPage(loadMenuPage)),
        createButton('Contact', () => loadPage(loadContactPage))
    ); 

    header.append(title, menuOptions);
    return header;
}

function createFooter() {
    const footer = document.createElement('div'); 
    footer.classList.add('footer'); 

    const footerText = document.createElement('div'); 
    footerText.textContent = 'Copyright © 2023 hampusbosson';
    footerText.classList.add('footer-text'); 

    footer.appendChild(footerText); 
    return footer; 
}

//load other pages by removing the current content
//from body and adding new content
function loadPage(pageLoader) {
    const body = document.querySelector('.body');
    body.innerHTML = '';
    body.appendChild(pageLoader());
}

//get content element and add body element: 
const content = document.getElementById('content');
const body = document.createElement('div');  
body.classList.add('body'); 

//load header, body and footer to pre-made 'content' div: 
content.append(createHeader(), body, createFooter()); 

// Load home page initially
loadPage(loadHomePage);