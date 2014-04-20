

var first = angular.module("FirstDemo",["SecondDemo"]);
first.controller("Hello",function Hello($scope){
    $scope.name = "Hello World Module";
});

var second = angular.module("SecondDemo",["FirstDemo"]);
second.controller("Hello2",function Hello($scope){
    $scope.name2 = "Hello2 World Module";
});
