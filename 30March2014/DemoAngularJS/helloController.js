var HelloCtrl = function ($scope) {
    $scope.name = "Hello World"
    alert("In Hello controller "+$scope.name);

    $scope.hello = function(){
        return "From function";
    }

}