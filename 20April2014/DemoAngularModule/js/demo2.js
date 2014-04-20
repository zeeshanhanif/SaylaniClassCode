

var first = angular.module("FirstDemo",[]);
first.controller("Hello",function Hello($scope,MyService,MyVal){
    $scope.name = "Hello World Module";
    $scope.servName = serviceName;
    $scope.myval = MyVal;
    //$scope.MyServ = MyService;
})
    .service("MyService",function (){
        serviceName = "Hello First Service";
    })
    .value("MyVal",4)
    .value("MyVal2","Data");
