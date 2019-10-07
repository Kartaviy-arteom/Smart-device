'use strict';

(function () {
	var KeyCode = {
    	ESC: 27
  	};
	var orderCallBtn = document.querySelector('.header__order-call');
	var popup = document.querySelector('.popup');
	var popupCloseButton = document.querySelector('.popup__button-close');
	var popupSubmitBtn = document.querySelector('.popup input[type="submit"]');
	var popupForm = document.querySelector('.popup form');
	var footerNavToogle = document.querySelector('.footer__btn');
	var footerNav = document.querySelector('.footer__nav ul')

	if (footerNavToogle) {
		footerNavToogle.addEventListener('click', function(evtToggle) {
			footerNavToogle.classList.toggle('myCssClass');
			footerNav.classList.toggle('.show');
		})	
	};

	

    var onOrderCallBtnClick = function (evt) {
    	var closePopup = function () {
			popup.classList.remove('show__popup');
			document.removeEventListener('keydown', onDocumentEscPress);
			popupCloseButton.removeEventListener('click', onPopupCloseButtonClick);
			popupForm.removeEventListener('submit', onPopupFormSubmit);
			orderCallBtn.addEventListener('click', onOrderCallBtnClick);
		}

		var onDocumentEscPress = function (evtPress) {
	        if (evtPress.keyCode === KeyCode.ESC) {
	            closePopup();
	        }
	    };

	    var onPopupFormSubmit = function () {
	    	closePopup();
	    };

	    var onPopupCloseButtonClick = function () {
			closePopup();
	    };
    	evt.preventDefault();
    	orderCallBtn.removeEventListener('click', onOrderCallBtnClick);
    	popup.classList.add('show__popup');
    	document.addEventListener('keydown', onDocumentEscPress);
      	popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
      	popupForm.addEventListener('submit', onPopupFormSubmit);
    };

	if (popup && orderCallBtn) {
		orderCallBtn.addEventListener('click', onOrderCallBtnClick); 
	};


})();