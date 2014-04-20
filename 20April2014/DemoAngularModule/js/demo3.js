

var first = angular.module("FirstDemo",[]);
first.controller("Hello",function Hello($scope,MyService,MyFactory){
    $scope.name = "Hello World Module";
    $scope.servName = MyService.serviceName;
    $scope.factName = MyFactory.MyFactoryName;
})
    .service("MyService",function (){
        this.serviceName = "Hello First Service";
    })
    .factory("MyFactory",function (){
        return {
            MyFactoryName:"This is factory"
        };
    })
;

