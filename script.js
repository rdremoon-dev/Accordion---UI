const accordion = document.querySelectorAll('.contentBox');

accordion.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordion.forEach(el => el.classList.remove('active'));

  
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
