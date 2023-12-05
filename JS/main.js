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

function showMobileMenu(){
    document.getElementById("mobileDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-mobile')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }