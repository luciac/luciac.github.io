
$(function(){

	// check if they have already completed the quiz
	if (getCookie('easterQuiz2018Passed')) {
		displayModal();
	}

	var modal = $('#easter-modal')[0];
	var btn = $("#clue-button")[0];
	var span = $(".close")[0];
	var answers = {
		a1: { 
			valid : false,
			options : ['candle', 'candles', 'lapiz', 'lápiz', 'a candle'],
		},
		a2: { 
			valid : false,
			options : ['león', 'leon', 'un león', 'un leon'],
		},
		a3: { 
			valid : false,
			options : ['pera'],
		},
		a4: { 
			valid : false,
			options : ['9', 9, 'nine', 'nueve'],
		},
		a5: { 
			valid : false,
			options : ['3', 'three', 'tres'],
		},
	}

	$('.riddle input').focus(function(){
		$(this).parent('.riddle-box').addClass('focus');
	});

	$('.riddle input').blur(function(){
		$(this).parent('.riddle-box').removeClass('focus');

		var id = $(this).attr('id');
		var answerOptions = answers[id].options;
		var answer = $(this).val();
		var isValid = checkAnswer(answer, answerOptions, this);

		answers[id].valid = isValid;
		if (isQuizValid()){
			$("#clue-button")[0].disabled = false;
			console.log(modal);
			displayModal();
			setCookie('easterQuiz2018Passed', true, 7);
		} 

	});


	btn.onclick = function() {
	    displayModal();
	}

	span.onclick = function() {
	    modal.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	function displayModal(){
		var text = "Oof! Ya no podia pensar despues de todas esas preguntas!  Lleve a Nelly a caminara para despejarme.  Fui a donde pescan los ietnamitas.  El signo decia algo muy interesante, me pare a leer lo por mucho tiempo.";
		modal.style.display = "block";
		$('#next-clue').html(text);
	}

	function checkAnswer(answer,answerOptions, inputElem) {
		if ( Object.values(answerOptions).indexOf(answer) !== -1) {
			$(inputElem).parents('.riddle').find('.isvalid-img').addClass('valid');
			$(inputElem).parents('.riddle').find('.isvalid-img').removeClass('invalid');
			return true;
		} else {
			$(inputElem).parents('.riddle').find('.isvalid-img').removeClass('valid');
			$(inputElem).parents('.riddle').find('.isvalid-img').addClass('invalid');
			return false;
		}
	}

	function isQuizValid(){
		var totalCorrect = 0;
		for (answer in answers) {
			if (answers[answer].valid) totalCorrect ++;
		}
		return (totalCorrect >= 4);
	}

	function setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}

	function getCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

});

