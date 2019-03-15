
$(window).load(function(){

     $('#slider').flexslider({
               animation: "slide",              //String: Select your animation type, "fade" or "slide"
               slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
               slideshow: true,                //Boolean: Animate slider automatically
               slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
               animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
               directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
               controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
               keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
               mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
               prevText: "",                   //String: Set the text for the "previous" directionNav item
               nextText: "",                   //String: Set the text for the "next" directionNav item
               pausePlay: false,               //Boolean: Create pause/play dynamic element
               pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
               playText: 'Play',               //String: Set the text for the "play" pausePlay item
               randomize: false,               //Boolean: Randomize slide order
               slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
               animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
               pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
               pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
               manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
               start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
               before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
               after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
               end: function(){}
     });

   
     //Portfolio rollover
    




     //Function for the Next button
     function loadNextItem(){
               
               var source2 = $('#control_buttons a#next').attr("href");
               $('div#portfolio_item').slideUp(300, function(){
                         $('div#item_container').empty();
                         $('div#item_container').append('<div class="loading" style="display: none;"></div>');
                         $('div.loading').slideDown(500);
                         $('div#item_container').delay(2500).queue(function( nxt ) {
                         $(this).load(source2, function(){
                                   $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                   $('div#portfolio_item').slideDown(500, function(){
                                             $('#item_video iframe').css('visibility','visible');
                                             $('#control_buttons a#next').click(function(){
                                                       loadNextItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#prev').click(function(){
                                                       loadPrevItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#close').click(function(){
                                                       $('div#portfolio_item').slideUp(300, function(){
                                                                 $('div#item_container').empty();
                                                                 $("div#filter_wrapper").slideDown(300);
                                                       });
                                             return false;
                                             });
                                   });
                         });
                         nxt();
                         });
               });

     }
     
     //Function for the Prev button
     function loadPrevItem(){
               
               var source3 = $('#control_buttons a#prev').attr("href");
               $('div#portfolio_item').slideUp(300, function(){
                         $('div#item_container').empty();
                         $('div#item_container').append('<div class="loading" style="display: none;"></div>');
                         $('div.loading').slideDown(500);
                         $('div#item_container').delay(2000).queue(function( nxt ) {
                         $(this).load(source3, function(){
                                   $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                   $('div#portfolio_item').slideDown(500, function(){
                                             $('#item_video iframe').css('visibility','visible');
                                             $('#control_buttons a#next').click(function(){
                                                       loadNextItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#prev').click(function(){
                                                       loadPrevItem();
                                                       return false;
                                             });
                                             $('#control_buttons a#close').click(function(){
                                                       $('div#portfolio_item').slideUp(300, function(){
                                                                 $('div#item_container').empty();
                                                                 $("div#filter_wrapper").slideDown(300);
                                                       });
                                             return false;
                                             });
                                   });
                         });
                         nxt();
                         });
               });

     }

     //Load and show portfolio pages
     $("div#portfolio_thumbs ul li a.more_info").click(function(){
               var source = $(this).attr("href");
               $('div#filter_wrapper').slideUp(300, function(){
                         $('div#item_container').append('<div class="loading"></div>');
                         // $('html,body').animate({scrollTop: $("#portfolio-wrap").offset().top - 150},'slow', function(){
                               $('html, body').animate({scrollTop: ($('#item_container').offset().top - 0)},'slow', function(){
                                   $('div#item_container').load(source, function(){
                                             $('div.loading').remove();
                                             $('#item_slider').flexslider({ controlNav: false, prevText: "<", nextText: ">" });
                                             $('div#portfolio_item').slideDown(500, function(){
                                                       $('#item_video iframe').css('visibility','visible');
                                                       $('#control_buttons a#next').click(function(){
                                                                 loadNextItem();
                                                                 return false;
                                                       });
                                                       $('#control_buttons a#prev').click(function(){
                                                                 loadPrevItem();
                                                                 return false;
                                                       });
                                                       $('#control_buttons a#close').click(function(){
                                                                 $('div#portfolio_item').slideUp(300, function(){
                                                                           $('div#item_container').empty();
                                                                           $("div#filter_wrapper").slideDown(300);
                                                                 });
                                                                  $('html, body').animate({scrollTop: ($('#item_container').offset().top - 0)});
                                                       return false;
                                                       });//End: click()
                                             });//End:slideDown()
                                   });//End:load()
                         });//End:animate()
               });//End:slideUp

     return false;
     });

});