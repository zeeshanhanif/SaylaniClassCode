
function HelloCtrl($scope){
    $scope.name = "Hello World";
    $scope.obj = {
        firstName : "Test",
        age: 44
    };
    $scope.getName = function() {
        return $scope.name;
    };
    //alert("This is function");

}