'use strict';

$(function () {

  if ($.ionTabs) {
    $.ionTabs('#tabs_1', {
      type: 'none'
    });
  }

  $('[data-js-code-reg-btn]').on('click', function () {
    $(this).addClass('tab2__btn--hide');
    $('.tab2__form').fadeIn(300);
  });

  //  faq accord
  $('.faq__question').on('click', function () {
    $(this).parent().toggleClass('active');
  });
  //// faq accord


  //  add ask btn
  $('[data-js-add-ask-btn]').on('click', function () {
    $('.faq__ask-wrap').addClass('active');
  });
  ////  add ask btn


  /*
   * order tabs
   */

  $('[data-js-cups-next-tab]').on('click', function () {
    var index = $(this).parent('[data-js-cups-tab]').attr('data-js-cups-tab');
    activateTabHead(parseFloat(index) + 1);
    activateTabContent(this);
    $('select').trigger('refresh');
  });

  function activateTabHead(index) {
    $('.order__step-head').removeClass('current').slice(index - 1, index).addClass('current');
  }

  function activateTabContent(self) {
    $(self).parent('.order__step-content').removeClass('current').next().addClass('current');
  }

  /*
   * order tabs
   ******************/

  /*
   *  order cups slider
   */

  var cupsSlider = $('.order__cups-wrap');
  var cupsItem = $('.order__cups-item');
  var originalImage = cupsSlider.find('a');
  var arrowsClasses = {
    prev: 'cups-slider-prev',
    next: 'cups-slider-next'
  };

  function getCurrent() {
    return cupsSlider.find('.current');
  }

  function setBigImage(link) {
    cupsItem.find('img').attr('src', link);
  }

  cupsItem.prepend('<span class="' + arrowsClasses.prev + '"></span>');
  cupsItem.append('<span class="' + arrowsClasses.next + '"></span>');

  var prevArr = $('.' + arrowsClasses.prev);
  var nextArr = $('.' + arrowsClasses.next);

  prevArr.on('click', function () {
    var current = getCurrent();
    var prev = current.prev();

    $(originalImage).removeClass('current');
    prev.addClass('current');
    setBigImage(prev.attr('href'));

    if (prev.length === 0) {
      var item = originalImage.slice(-1);
      item.addClass('current');
      setBigImage(item.attr('href'));
    }
  });

  nextArr.on('click', function () {
    var current = getCurrent();
    var next = current.next();

    $(originalImage).removeClass('current');
    next.addClass('current');
    setBigImage(next.attr('href'));

    if (next.length === 0) {
      var item = originalImage.slice(0, 1);
      item.addClass('current');
      setBigImage(item.attr('href'));
    }
  });

  originalImage.on('click', function (e) {
    e.preventDefault();

    originalImage.removeClass('current');

    $(this).addClass('current');

    var originalImageLink = $(this).attr('href');

    setBigImage(originalImageLink);
  });

  /*
   * order cups slider
   *************************/

  /*
   * select styling
   */
  $('select').styler({
    selectSmartPositioning: false
  });

  /*
   * radio button styling
   */
  $('input[type=radio]').styler();

  /*
   * tab3 head buttons
   */
  var tabBtn = $('[data-js-tab-btn]');
  var tabContent = $('[data-js-tab-content]');

  tabBtn.on('click', function () {
    var index = $(this).attr('data-js-tab-btn');
    tabBtn.removeClass('active');
    $(this).addClass('active');
    tabContent.removeClass('active');
    $('[data-js-tab-content=' + index + ']').addClass('active');
    $('select').trigger('refresh');
  });
});
//# sourceMappingURL=app.js.map
