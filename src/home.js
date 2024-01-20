import Icon from './pizza-guy.png'; 

function loadHomePage() {
    const contentBox = document.querySelector('.body');  
    contentBox.innerHTML = ''; 

    const homePage = document.createElement('div');
    homePage.classList.add('homepage'); 

    const upperSection = document.createElement('div');
    upperSection.classList.add('upper-section');  

    const upperText = document.createElement('div');
    upperText.textContent = 'Best Pizza In Trosa';

    const middleText = document.createElement('div');
    middleText.textContent = 'Made With Passion Since 1854';

    upperSection.append(upperText, middleText); 

    const pizzaGuyImage = new Image(); 
    pizzaGuyImage.src = Icon; 
    pizzaGuyImage.classList.add('image'); 

    const lowerText = document.createElement('div');
    lowerText.textContent = 'Order Online Or Visit Us!';

    homePage.append(upperSection, pizzaGuyImage, lowerText);

    return homePage; 
}

export default loadHomePage;