
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
  
function telValidate(tel) {
  if (tel.value.length !=10) {
    alert("Telephone numbers must be 10 digits!")
  }
}