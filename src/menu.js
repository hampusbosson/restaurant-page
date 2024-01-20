import pizzaOne from './pizza-1.png'; 
import pizzaTwo from './pizza-2.png'; 
import pizzaThree from './pizza-3.png'; 
import pizzaFour from './pizza-4.png'; 
import pizzaFive from './pizza-5.png'; 
import pizzaSix from './pizza-6.png'; 


function loadMenuPage() {
    const contentBox = document.querySelector('.body');  
    contentBox.innerHTML = ''; 

    const menuPage = document.createElement('div');
    menuPage.classList.add('menupage'); 

    const boxOne = document.createElement('div'); 
    boxOne.classList.add('menu-box'); 
    const pizzaOneImage = new Image(); 
    pizzaOneImage.src = pizzaOne; 
    pizzaOneImage.classList.add('pizza-image');
    const boxOneText = document.createElement('div'); 
    boxOneText.textContent = 'Peperoni'; 

    boxOne.append(pizzaOneImage, boxOneText); 

    const boxTwo = document.createElement('div'); 
    boxTwo.classList.add('menu-box'); 
    const pizzaTwoImage = new Image(); 
    pizzaTwoImage.src = pizzaTwo; 
    pizzaTwoImage.classList.add('pizza-image'); 
    const boxTwoText = document.createElement('div'); 
    boxTwoText.textContent = 'Amigo'; 
    boxTwo.append(pizzaTwoImage, boxTwoText); 

    const boxThree = document.createElement('div'); 
    boxThree.classList.add('menu-box'); 
    const pizzaThreeImage = new Image(); 
    pizzaThreeImage.src = pizzaThree; 
    pizzaThreeImage.classList.add('pizza-image');
    const boxThreeText = document.createElement('div'); 
    boxThreeText.textContent = 'Riviera'; 
    boxThree.append(pizzaThreeImage, boxThreeText); 

    const boxFour = document.createElement('div'); 
    boxFour.classList.add('menu-box'); 
    const pizzaFourImage = new Image(); 
    pizzaFourImage.src = pizzaFour; 
    pizzaFourImage.classList.add('pizza-image');
    const boxFourText = document.createElement('div'); 
    boxFourText.textContent = 'Hawaii'; 
    boxFour.append(pizzaFourImage, boxFourText); 

    const boxFive = document.createElement('div'); 
    boxFive.classList.add('menu-box'); 
    const pizzaFiveImage = new Image(); 
    pizzaFiveImage.src = pizzaFive; 
    pizzaFiveImage.classList.add('pizza-image');
    const boxFiveText = document.createElement('div'); 
    boxFiveText.textContent = 'Bussola'; 
    boxFive.append(pizzaFiveImage, boxFiveText); 

    const boxSix = document.createElement('div'); 
    boxSix.classList.add('menu-box'); 
    const pizzaSixImage = new Image(); 
    pizzaSixImage.src = pizzaSix; 
    pizzaSixImage.classList.add('pizza-image');
    const boxSixText = document.createElement('div'); 
    boxSixText.textContent = 'Juventus'; 
    boxSix.append(pizzaSixImage, boxSixText); 

    menuPage.append(boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix); 

    return menuPage; 
}

export default loadMenuPage;