import mapImage from './karta.png'; 

function createContactInfo(text) {
    const infoDiv = document.createElement('div');
    infoDiv.textContent = text;
    return infoDiv;
}

function loadContactPage() {
    const contactPage = document.createElement('div'); 
    contactPage.classList.add('contact-page'); 

    const textContent = document.createElement('div'); 
    textContent.classList.add('contact-text'); 

    const phoneNumber = createContactInfo('📞 123 456 789');
    const email = createContactInfo('📩 info@pizzerialapiazza.se');
    const address = createContactInfo('🏠 Industrigatan 2A, 619 33 Trosa, Sweden');

    const map = new Image(); 
    map.src = mapImage; 
    map.classList.add('map-image'); 

    textContent.append(phoneNumber, email, address);
    contactPage.append(textContent, map); 

    return contactPage; 
}

export default loadContactPage; 