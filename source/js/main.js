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
  var popupFirstInput = document.querySelector('input:first-child');

  var foorNavTogglete = document.querySelector('.footer__btn--nav');
  var footerNav = document.querySelector('.footer__nav-list');
  var footerAddress = document.querySelector('.footer__address-list');
  var footerAddressToggle = document.querySelector('.footer__btn--address');

  var firstMenu = {
    toggle: foorNavTogglete,
    block: footerNav
  };
  var secondMenu = {
    toggle: footerAddressToggle,
    block: footerAddress
  };

  var menues = [firstMenu, secondMenu];
  menues.forEach(function (el, index) {
    el.toggle.addEventListener('click', function(evt) {
      closeMenues(index);
      el.toggle.classList.toggle('footer__btn--close');
      el.block.classList.toggle('show');
    })
  });

  var closeMenues = function (index) {
    menues.forEach(function (el, j) {
      if (index !== j) {
        el.toggle.classList.add('footer__btn--close');
        el.block.classList.remove('show');
      }
    });
  };

  var phoneMask = IMask(
  document.getElementById('tel'), {
    mask: '+{7}(000)000-00-00'
  });

  var popupPhoneMask =  IMask(
  document.getElementById('popup-tel'), {
    mask: '+{7}(000)000-00-00'
  });


  var moveTo = new MoveTo();
  const trigger = document.getElementsByClassName('js-trigger')[0];
  moveTo.registerTrigger(trigger);

  var onOrderCallBtnClick = function (evt) {
    var closePopup = function () {
      popup.classList.remove('show__popup');
      document.removeEventListener('keydown', onDocumentEscPress);
      popupCloseButton.removeEventListener('click', onPopupCloseButtonClick);
      popupForm.removeEventListener('submit', onPopupFormSubmit);
      orderCallBtn.addEventListener('click', onOrderCallBtnClick);
    };

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
    popupFirstInput.focus();
    document.addEventListener('keydown', onDocumentEscPress);
    popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
    popupForm.addEventListener('submit', onPopupFormSubmit);
  };

  if (popup && orderCallBtn) {
    orderCallBtn.addEventListener('click', onOrderCallBtnClick);
  };
})();
