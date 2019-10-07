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
	var footerNavToogle = document.querySelector('.footer__btn--nav');
	var footerNav = document.querySelector('.footer__nav-list');
	var footerAddress = document.querySelector('.footer__address-list');
	var footerAddressToogle = document.querySelector('.footer__btn--address');

	var showMenu = function(toogle, menu) {
		if (toogle && menu) {
			toogle.addEventListener('click', function(evtToggle) {
				toogle.classList.toggle('footer__btn--close');
				menu.classList.toggle('show');
			})
		}
	};

	showMenu(footerNavToogle, footerNav);
	showMenu(footerAddressToogle, footerAddress);

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
