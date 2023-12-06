function redirectToAboutPage() {
    window.location.href = 'about.html';
}


function showMobileMenu(){
    var element = document.getElementById('dropdownContent');
    element.classList.add('show');
}

function hideMenu() {
    var element = document.getElementById('dropdownContent');
    element.classList.remove('show');
  }
