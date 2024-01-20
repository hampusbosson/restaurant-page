import pizzaOne from './pizza-1.png'; 
import pizzaTwo from './pizza-2.png'; 
import pizzaThree from './pizza-3.png'; 
import pizzaFour from './pizza-4.png'; 
import pizzaFive from './pizza-5.png'; 
import pizzaSix from './pizza-6.png'; 

function createMenuItem(imageSrc, text) {
    const box = document.createElement('div'); 
    box.classList.add('menu-box'); 

    const image = new Image(); 
    image.src = imageSrc; 
    image.classList.add('pizza-image');

    const textBox = document.createElement('div'); 
    textBox.textContent = text; 

    box.append(image, textBox); 
    return box;
}

function loadMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menupage'); 

    const pizzas = [
        { src: pizzaOne, text: 'Peperoni' },
        { src: pizzaTwo, text: 'Amigo' },
        { src: pizzaThree, text: 'Riviera' },
        { src: pizzaFour, text: 'Hawaii' },
        { src: pizzaFive, text: 'Bussola' },
        { src: pizzaSix, text: 'Juventus' },
    ];

    pizzas.forEach(pizza => {
        const menuItem = createMenuItem(pizza.src, pizza.text);
        menuPage.appendChild(menuItem);
    });

    return menuPage; 
}

export default loadMenuPage;