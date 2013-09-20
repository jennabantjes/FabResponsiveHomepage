;(function($){

    swapNavs = function() {

            var $width = $( window ).width();

            console.log($width);

            $('#open-menu').click(function(){
                $('ul.categories').slideToggle();
            });

            $('ul.categories a').click(function(){
                console.log('come on');
                $('.icon-down-open').hide();
                $('.icon-left-dir').show();
            });

            $('.icon-left-dir').click(function(){
                $('ul.categories').hide();
                $('.flyout').hide();
                $('.icon-left-dir').hide();
                $('.icon-down-open').show();
            });

            /*if ($('ul.categories').is(":hidden")) {
                $('#open-menu').click(function(){
                    console.log('default');
                        $('ul.categories').slideToggle();
                    });
                }

            else {
                $('#open-menu').click(function(){
                    console.log('visible');
                    $('.arrow').removeClass('icon-down-open');
                });
            }*/
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