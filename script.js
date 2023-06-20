const email = document.getElementById('email')
const profilePicture = document.getElementById('profile')
function addProfile() {

  console.log(email.value);
  console.log(profilePicture.files[0]);
  if (!profilePicture.files[0] || !email.value) {
    Toastify({
      text: "you should write something",
    }).showToast();
    return;
  }
  showLoader();
  const formData = new FormData();
  formData.append('email', email);
  formData.append('profilePicture', profilePicture.files[0]);

  fetch('https://localhost:3000/api', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      hideLoader();
      if (response) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    })
    .catch(error => {
      hideLoader();

      console.error('An error occurred:', error);
    });
}
function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.parentNode.removeChild(loader);
  }
}