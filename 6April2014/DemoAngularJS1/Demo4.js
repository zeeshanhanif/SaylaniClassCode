function Ctrl1($scope){
    $scope.$on('AdeelResign',function (){
        alert("Resign Ctrl 1");
    });
    $scope.ctrl1Click = function(){
        alert("test");
        $scope.$broadcast('AdeelResign');
    }
}
function Ctrl2($scope){
    $scope.$on('AdeelResign',function (){
        alert("Resign Ctrl 2");
    });
    $scope.ctrl2Click = function(){
        alert("test");
        $scope.$emit('AdeelResign');
    }
}
function Ctrl3($scope){
    $scope.$on('AdeelResign',function (){
        alert("Resign Ctrl 3");
    });
    $scope.ctrl3Click = function(){
        alert("test");
        $scope.$emit('AdeelResign');
    }
}