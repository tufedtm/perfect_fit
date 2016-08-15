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
    $('.faq__ask-wrap').addClass('active')
  });
  ////  add ask btn

});
