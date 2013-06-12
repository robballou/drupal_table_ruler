/**
 * Admin table ruler
 */
(function($) {
  $(document).ready(function() {

    // add the has-table-ruler class to all tables
    $('body.page-admin table').addClass('has-table-ruler');

    // when rows are clicked, highlight them
    $('body.page-admin tbody tr')
      .click(function() {
        $(this).toggleClass('has-table-ruler-highlight');
      });

  });
})(jQuery);
