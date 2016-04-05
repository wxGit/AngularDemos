/**
 * Created by wash on 16/4/1.
 */
angular.module('myApp').directive('z3fTree', ['$http',function ($http) {
    return {
        restrict:'E',
        templateUrl: "mytreeTpl.html",
        transclude:true,
        replace:true,
        scope:{
            data:'=treeData',
            onSelect: '&'
        },
        require:['z3fTree'],
        controller:function($scope){
            // console.log($scope.data);
            var dic = {};
            if (!$scope.data) {
                alert('no treeData defined for the tree!');
                return;
            }else{
                dic = $scope.data;
            }

            for(var i in dic){					//用来处理所属关系
                if(dic[i].pid !==undefined){	//判断指定pid的才处理
                    var pid = dic[i].pid;
                    if(dic[pid]){				//判断父类是否存在
                        dic[pid].children || (dic[pid].children = []);//判断父类有无child，无则初始化
                        dic[pid].children.push(i);	//登记到父类child中
                    }
                }
            }

            $scope.data = dic;

            this.addNode = function(elm,pid){
               console.log(elm+pid);
            }

        },
        link: function (scope, element,attr,contrl) {
            console.log(scope.data);
            contrl[0].addNode(element,-1);
        }
    }
}]);
