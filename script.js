function toggleMode() {
  const html = document.documentElement;
  const profileImg = document.querySelector('#profile img');
  const profileImgSrc = profileImg.getAttribute('src');

  if (html.classList.contains('light')) {
    profileImg.setAttribute('src', './assets/avatar.png');
  } else {
    profileImg.setAttribute('src', './assets/avatar-light.png');
  }

  html.classList.toggle('light');
}
