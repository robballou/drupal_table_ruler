/**
 * Admin table ruler
 */
(function($) {
  $(document).ready(function() {
    $('body.page-admin table').addClass('has-table-ruler');
    $('body.page-admin tbody tr')
    .click(function() {
      $(this).toggleClass('has-table-ruler-highlight');
    });
  });
})(jQuery);
