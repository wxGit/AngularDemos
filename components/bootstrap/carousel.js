/**
 * Created by wash on 16/3/25.
 */
angular.module('myApp',['ui.bootstrap'])
    .controller('CarouselDemoCtrl', ['$scope', function($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            slides.push({
                image: 'img/c' + slides.length + '.jpg',
                text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
    }]);