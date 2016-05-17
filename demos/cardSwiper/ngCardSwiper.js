/**
 * Created by wash on 16/5/17.
 */
angular.module('swiperCard',[]).directive("swiperCard",function() {
    return {
        restrict: "AE",
        controller: function() {
            //this.ready = function() {
            //    $rootScope.updateSwiper();
            //}
        },
        link: function(scope, element, attrs, ctrl) {
            mySwiper = new Swiper(".swiper-container", {
                //loop:false,
                centeredSlides:true,
                slidesPerView: 1.3,
                effect : 'coverflow'
            });
        }
    }
})
