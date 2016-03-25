/**
 * Created by wash on 16/3/25.
 */
angular.module('myApp', ['toaster', 'ngAnimate'])
    .controller('ToasterDemoCtrl', ['$scope', 'toaster', function($scope, toaster) {
        $scope.toaster = {
            type: 'success',
            title: 'Title',
            text: 'Message'
        };
        $scope.pop = function(){
            toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
        };
    }]);