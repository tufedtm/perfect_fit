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

});
