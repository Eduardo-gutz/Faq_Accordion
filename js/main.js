const quest = document.querySelectorAll('.faq__question');

function active (event) {
  event.preventDefault;
  if (this.classList.contains('faq__question_active')) {
    this.classList.remove('faq__question_active');
  } else {
    quest.forEach((q) => {
      if (q.classList.contains('faq__question_active')) {
        q.classList.remove('faq__question_active');
      }
    });

    this.classList.add('faq__question_active');
  }
};

quest.forEach(q => {
  q.addEventListener('click', active);
});
