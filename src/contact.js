import mapImage from './karta.png'; 

function loadContactPage() {
    const contentBox = document.querySelector('.body');  
    contentBox.innerHTML = ''; 

    const contactPage = document.createElement('div'); 
    contactPage.classList.add('contact-page'); 

    const textContent = document.createElement('div'); 
    textContent.classList.add('contact-text'); 

    const phoneNumber = document.createElement('div'); 
    phoneNumber.textContent = '📞 123 456 789'; 

    const email = document.createElement('div'); 
    email.textContent = '📩 info@pizzerialapiazza.se';

    const adress = document.createElement('div'); 
    adress.textContent = '🏠 Industrigatan 2A, 619 33 Trosa, Sweden';

    const map = new Image(); 
    map.src = mapImage; 
    map.classList.add('map-image'); 

    textContent.append(phoneNumber, email, adress);
    contactPage.append(textContent, map); 

    return contactPage; 
}

export default loadContactPage; 