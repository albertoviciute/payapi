function addBorder(element){
    element.style.borderBottom = '1px solid rgba(54, 83, 107)';
}

function checkIfInputIsEmpty(element){
    if (element.value === null || element.value === "") {
        element.style.borderBottom = '1px solid rgba(54, 83, 107, 0.25)';
    }
}

function redirectToAboutPage(){
    window.location.href = 'about.html';
}