;(function($){

    swapNavs = function() {

            var $width = $( window ).width();

            console.log($width);

            $('#open-menu').click(function(){

                $('ul.categories').slideToggle();
            });
        }

    subNavs = function() {

        $('ul.categories a').click(function(){
            console.log('almost done');

            $('ul.categories').slideToggle();

            $('.flyout').show();
        });
    }

    swapNavs();
    subNavs();

}(jQuery));