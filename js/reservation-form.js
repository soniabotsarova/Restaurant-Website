
function logSubmit(event) {
    const firstName = firstNameElem.value;
    console.log('form submitted', event);
    log.textContent = `Thank you, ${firstName}. See you soon!`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const telError = document.getElementById('telError');
  const firstNameElem = document.getElementById('firstName');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
  
function telValidate(tel) {
  if (tel.value.length !=10) {
    telError.innerHTML = "Phone number invalid";
  } else {
    telError.innerHTML = "";
  }
}