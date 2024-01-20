import './style.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

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

function footer() {
    const footer = document.createElement('div'); 
    footer.classList.add('footer'); 

    const footerText = document.createElement('div'); 
    footerText.textContent = 'Copyright © 2023 hampusbosson';
    footerText.classList.add('footer-text'); 

    footer.appendChild(footerText); 
    return footer; 
}

const content = document.getElementById('content');

const body = document.createElement('div');  
body.classList.add('body'); 
content.append(header.getHeader(), body, footer()); 

const homePage = loadHomePage(); 
body.appendChild(homePage);

header.getMenuButton().addEventListener('click', () => {
    const menuContent = loadMenuPage();
    body.appendChild(menuContent);
});

header.getHomeButton().addEventListener('click', () => {
    const pageContent = loadHomePage();
    body.appendChild(pageContent);
});

header.getContactButton().addEventListener('click', () => {
    const contactContent = loadContactPage(); 
    body.appendChild(contactContent); 
});
