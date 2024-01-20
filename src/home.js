import Icon from './pizza-guy.png'; 

function createTextElement(text, className) {
    const textElement = document.createElement('div');
    textElement.textContent = text;
    if (className) {
        textElement.classList.add(className);
    }
    return textElement;
}

function loadHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add('homepage'); 

    const upperSection = document.createElement('div');
    upperSection.classList.add('upper-section');  

    const upperText = createTextElement('Best Pizza In Trosa');
    const middleText = createTextElement('Made With Passion Since 1854');

    upperSection.append(upperText, middleText); 

    const pizzaGuyImage = new Image(); 
    pizzaGuyImage.src = Icon; 
    pizzaGuyImage.classList.add('image'); 

    const lowerText = createTextElement('Order Online Or Visit Us!');

    homePage.append(upperSection, pizzaGuyImage, lowerText);

    return homePage; 
}

export default loadHomePage;