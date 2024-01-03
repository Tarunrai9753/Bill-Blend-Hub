const form = document.querySelector('.needs-validation');
    
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  } else {
    alert('Successfully Submitted');
  }

  form.classList.add('was-validated');
});