var app = angular.module("Demo",['Cars']);

app.controller("FirstCtrl",function ($scope,Car,Engine){
    console.log("First Controller");
    $scope.name = "First Controller";
    $scope.carName = Car.name;
    $scope.engineName = Engine.name;
})

angular.module("Cars",['Engines'])
    .factory("Car",function (Engine){
        console.log(Engine.name+" in factory");
        return {
            name:"MyCar"
        }
    })

angular.module("Engines",[])
    .factory("Engine",function (){
        return {
            name:"My Engine"
        }
    })
