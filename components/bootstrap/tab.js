/**
 * Created by wash on 16/3/25.
 */
angular.module('myApp',['ui.bootstrap'])
    .controller('TabsDemoCtrl', ['$scope', function($scope) {
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];
    }]);