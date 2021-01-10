var quest = document.querySelectorAll('.faq-question');

const active = function(e){
	e.preventDefault();
	if (this.classList.contains('faq-question--active')){
		this.classList.remove('faq-question--active');
	}else{
		quest.forEach(q => {
			if(q.classList.contains('faq-question--active')){
				q.classList.remove('faq-question--active');
			};
		});

		this.classList.add('faq-question--active');
	};
};

quest.forEach(q => {
	q.addEventListener('click', active);
});