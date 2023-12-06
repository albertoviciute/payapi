const contactForm = document.getElementById('contactForm');
const button = document.getElementById('fromButton');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const company = document.getElementById('companyName');
const title = document.getElementById('title');
const message = document.getElementById('message');
const contactCheck = document.getElementById('checkbox');
const formValues = [contactName, contactEmail, company, title, message];
const scheduleForm = document.getElementById('formScheduleDemo');
const scheduleInput = document.getElementById('inputScheduleDemo');
const scheduleButton= document.getElementById('buttonScheduleDemo');


// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     const isValid = validateForm(formValues);

//     if (isValid) {
//         const sanitizedValues = sanitizeValues(formValues);
//         const fakeEndpoint = 'https://jsonplaceholder.typicode.com/posts';
//         console.log(sanitizedValues)
//         // fetch(fakeEndpoint, {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(sanitizedValues),
        // })
        //     .then(response => {
        //         if (response.ok || response.status === 201) {
        //             return response.json();
        //         } else {
        //             throw new Error(`Form submission failed with status: ${response.status}`);
        //         }
        //     })
        //     .then(responseData => {
        //         console.log('Form submitted successfully:', responseData);
        //     })
        //     .catch(error => {
//         //         console.error('An error occurred during form submission:', error);
//         //     });
//         }
//     contactForm.reset();
//     resetInputBorder();
//     formValues.forEach(element => {
//         resetInputBorder(element, 1);
//     });
// });

function sanitizeValues(formValues) {
    const sanitizedFormValues = {};

    formValues.forEach(element => {
        const trimmedValue = element.value.trim();
        let sanitizedValue;
        if (/[<>&$%^#]/.test(trimmedValue)) {
            sanitizedValue = trimmedValue.replace(/[<>&$%^#]/g, function(match) {
                switch (match) {
                    case '<':
                        return '&#x3C;';
                    case '>':
                        return '&#x3E;';
                    case '#':
                        return '&#35;';
                    case '$':
                        return '&#36;';
                    case '%':
                        return '&#37;';
                    case '^':
                        return '&#94;';
                    case '&':
                        return '&amp;';
                }
            });
            sanitizedFormValues[element.name] = sanitizedValue;
        } else {
            sanitizedFormValues[element.name] = trimmedValue;
        }        
    });

    sanitizedFormValues['news-checkbox'] = contactCheck.checked;

    return sanitizedFormValues;
}


// formValues.forEach(element => {
//     element.onblur = () => resetInputBorder(element, 2);
//     element.onfocus = () => element.classList.add('border-bottom--dark');
// });


function resetInputBorder(element, mode) {
    if (mode === 1) {
        element.classList.remove('border-bottom--dark');
    } else if (mode === 2) {
        if (element.value === null || element.value === "") {
            element.classList.remove('border-bottom--dark');
        }
    }
}

function setErrorMessage(element, message) {
    const inputParent = element.parentElement;
    const errorSpan = document.getElementById('error');

    errorSpan.innerText = message;
    inputParent.classList.add('div-error');
}

function removeErrorMessage(element) {
    const inputParent = element.parentElement;
    const errorSpan = document.getElementById('error');

    errorSpan.innerText = '';
    inputParent.classList.remove('div-error');
}

function validateForm(values) {
    values.forEach(element => {
        element.value.trim();
    });
    return validEmailInput(contactEmail);
}

function validEmailInput(email) {
    const trimedEmail = email.value.trim();
    const dotsCountInEmail = trimedEmail.split('.').length - 1;
    const atSignCount = trimedEmail.split('@').length - 1;
    const lastDotIndex = trimedEmail.lastIndexOf('.');
    const atSignIndex = trimedEmail.indexOf('@');

    if (trimedEmail === '') {
        setErrorMessage(email, 'This field can’t be empty');
    } else if (!trimedEmail.includes('@')) {
        setErrorMessage(email, "The email address provided must contain the '@' symbol");
    } else if (trimedEmail.includes(' ')) {
        setErrorMessage(email, "The email address provided cannot contain spaces");
    } else if (!trimedEmail.includes('.')) {
        setErrorMessage(email, "The email address provided must contain a dot");
    }  else if (trimedEmail.endsWith('.')) {
        setErrorMessage(email, "The email address provided cannot end with a dot");
    } else if (trimedEmail.startsWith('@') || trimedEmail.startsWith('.')) {
        setErrorMessage(email, "The email address provided must start with a username before '@' symbol");
    } else if (trimedEmail.charAt(atSignIndex + 1) === '.') {
        setErrorMessage(email, "Domain is required after the '@' symbol in the email address");
    } else if (dotsCountInEmail >= 3) {
        setErrorMessage(email, "Too many dots, only two dots are allowed in the email address");
    } else if (atSignCount > 1) {
        setErrorMessage(email, "Too many '@' symbol, only one sign is allowed in the email address");
        // }  else if (trimedEmail.indexOf('.') > 0 && trimedEmail.indexOf('.') > trimedEmail.indexOf('@')){
        // Bullshit
        //setErrorMessage(email, "There could be only one dot at the beginning of the '@' symbol");
    } else if ((trimedEmail.charAt(lastDotIndex - 1)) === '.') {
        setErrorMessage(email, "Multiple dots in the domain portion is invalid");
    } else {
        removeErrorMessage(email);
        return true;
    }

    return false;
}

// contactName.addEventListener('input', function () {
//     this.value = this.value.replace(/[^\p{L}\s]/gu, '');
// });
// title.addEventListener('input', function () {
//     this.value = this.value.replace(/[^\p{L}\s\d]/gu, '');
// });

function validateFormSchedule(element) {
    element.value.trim();
    return validEmailInput(scheduleInput);
}

function scheduleDemoForm(e){
    e.preventDefault();
    const isValid = validateFormSchedule(scheduleInput);
    if(isValid){
        console.log(scheduleInput.value)
    }
    scheduleForm.reset();
}