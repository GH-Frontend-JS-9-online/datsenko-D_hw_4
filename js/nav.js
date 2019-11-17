(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu-second').toggleClass('menu_state_open');
        });
    });
})(jQuery);
