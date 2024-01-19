import './style.css';

const header = (() => {
    const header = document.createElement('div'); 
    header.classList.add('header'); 

    const title = document.createElement('div'); 
    title.textContent = 'Pizzeria La Piazza'; 
    title.classList.add('title'); 

    const menyOptions = document.createElement('ul'); 
    const homeButton = document.createElement('li');
    homeButton.textContent = 'Home';
    const menuButton = document.createElement('li'); 
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('li'); 
    contactButton.textContent = 'Contact';

    menyOptions.append(homeButton, menuButton, contactButton); 

    header.append(title, menyOptions);

    const getHeader = () => {
        return header; 
    }

    const getHomeButton = () => {
        return homeButton; 
    }

    const getMenuButton = () => {
        return menuButton; 
    }

    const getContactButton = () => {
        return contactButton;
    }
    
    return { getHeader, getHomeButton, getMenuButton, getContactButton };
})();


const content = document.getElementById('content');
const body = document.createElement('div');  
const bodyContent = document.createElement('div'); 
bodyContent.textContent = 'body content'; 
body.appendChild(bodyContent); 
body.classList.add('body'); 
content.appendChild(header.getHeader()); 
content.appendChild(body); 
