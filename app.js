'use strict';

$(function () {

  $.ionTabs('#tabs_1', {
    type: 'storage'
  });

  $('[data-js-code-reg-btn]').on('click', function () {
    $(this).addClass('tab2__btn--hide');
    $('.tab2__form').fadeIn(300);
  });
});
//# sourceMappingURL=app.js.map
