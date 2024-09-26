const buttons = document.querySelectorAll('.open-modal-btn');
const closeButtons = document.querySelectorAll('.modalClose');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById("modalCalculate").classList.add("open")
    document.body.classList.add('no-scroll');
  });
});
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById("modalCalculate").classList.remove("open")
    document.body.classList.remove('no-scroll');
  });
});

const buttons2 = document.querySelectorAll('.open-modal-btn2');
buttons2.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById("modalDiscussion").classList.add("open")
    document.body.classList.add('no-scroll');
  });
});
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById("modalDiscussion").classList.remove("open")
    document.body.classList.remove('no-scroll');
  });
});
