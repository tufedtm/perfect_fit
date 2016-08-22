$(() => {

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
    $(this).parent().toggleClass('active')
  });
  //// faq accord


  //  add ask btn
  $('[data-js-add-ask-btn]').on('click', function () {
    var text = $(this).text();
    $(this).text(
      text === 'Задать вопрос' ? 'Закрыть' : 'Задать вопрос'
    );
    $('.faq__ask-wrap').toggleClass('active')
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
    $('.order__step-head')
      .removeClass('current')
      .slice(index - 1, index)
      .addClass('current');
  }

  function activateTabContent(self) {
    $(self)
      .parent('.order__step-content')
      .removeClass('current')
      .next()
      .addClass('current')
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
    return cupsSlider.find('.current')
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
    selectSmartPositioning: false,
  });


  /*
   * radio button styling
   */
  $('input[type=radio]').styler();

  //
  // /*
  //  * tab3 head buttons
  //  */
  // var tabBtn = $('[data-js-tab-btn]');
  // var tabContent = $('[data-js-tab-content]');
  //
  // tabBtn.on('click', function () {
  //   var index = $(this).attr('data-js-tab-btn');
  //   tabBtn.removeClass('active');
  //   $(this).addClass('active');
  //   tabContent.removeClass('active');
  //   $('[data-js-tab-content=' + index + ']').addClass('active');
  //   $('select').trigger('refresh');
  // });


  /*
   * personal tabs
   */
  var personalTabs = $('[data-js-personal-tabs]');
  var personalTabsContent = $('[data-js-personal-tabs-content]');

  personalTabs.on('click', function () {
    var index = $(this).attr('data-js-personal-tabs');
    personalTabs.removeClass('current');
    $(this).addClass('current');
    personalTabsContent.removeClass('current');
    $('[data-js-personal-tabs-content=' + index + ']').addClass('current');
    $('select').trigger('refresh');
  });


  /*
   * pop-up
   */

  $('[data-js-popup-link]').click(function () {
    var name = $(this).attr('data-js-popup-link');
    $('html').addClass('popup-active');
    $('[data-js-popup-form=' + name + ']').addClass('active');
  });

  $('.pop-up__cancel').click(function () {
    $('html').removeClass('popup-active');
    $('.pop-up').removeClass('active');
  });

  $('.pop-up').click(function () {
    $('html').removeClass('popup-active');
    $('.pop-up').removeClass('active');
  });

  $('.pop-up *').click(function (e) {
    e.stopPropagation();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('html').removeClass('popup-active');
      $('.pop-up').removeClass('active');
    }
  });


  /*
   * xs nav toggle
   */

  $('[data-js-nav-toggle-xs]').on('click', function () {
    $('.header-links').toggleClass('active')
  });


  /*
   * cups ordered slider
   */

  function flkty() {
    if (window.innerWidth <= 800) {
      new Flickity('[data-js-flickity]', {
        prevNextButtons: false,
        wrapAround: true
      });
    } else {
      new Flickity('[data-js-flickity]').destroy();
    }
  }

  if (document.querySelector('[data-js-flickity]')) {
    $(window).on('load resize', function () {
      flkty()
    });
  }


  /*
   * offset test
   */

  if (document.getElementById('aside')) {
    var slideout = new Slideout({
      panel: document.getElementById('main'),
      menu: document.getElementById('aside'),
      side: 'right'
    });

    document.querySelector('.aside-toggle-button').addEventListener('click', function () {
      slideout.toggle();
    });
  }

  /*
   * tabs
   */

  $('[data-js-responsiveTabs]').responsiveTabs({
    startCollapsed: 'accordion',
    activate: function(){
      if (document.getElementById('map')){
        initMap();
      }
    }
  });

  $('[data-js-responsiveTabs=2]').responsiveTabs('deactivate', 0);

});
