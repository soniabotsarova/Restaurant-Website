
function logSubmit(event) {
    const firstName = firstNameElem.value;
    console.log('form submitted', event);
    log.textContent = `Form Submitted! Time stamp: ${firstName}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const firstNameElem = document.getElementById('firstName');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
  
