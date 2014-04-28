var app = angular.module("Demo",[]);

app.controller("FirstCtrl",function ($rootScope,$scope,FirstFactory,FirstService,MyProviderService,MyConstant){
    console.log("First Controller");
    $scope.name = "First Controller";
    $scope.myService = FirstService;
    $scope.myFactory = FirstFactory;
    $scope.myProvider = MyProviderService;
    $scope.myConst = MyConstant;

    $scope.updateValue = function(){
        alert("Update Value");
        FirstFactory.name = "Updated Factory";
    }
    //FirstFactory.name = "Updated Factory"
}).controller("SecondCtrl",function ($scope,FirstService,FirstFactory){
        console.log("Second Controller");
        $scope.name = "Second Controller";
        $scope.myService = FirstService;
        $scope.myFactory = FirstFactory;
    }).service("FirstService",function (){
        console.log("First Service");
        this.name = "Hello World Service"
    }).factory("FirstFactory",function (){
        console.log("First Factory");
        return {
            name:"First Factory",
            age:4
        };
    })
    .provider("MyProviderService",function (){
        console.log("My Provider service 1");
        var data = "New"
        return {
            update : function (){
                data = "Updated";
            },
            $get : function ($rootScope){
                console.log("My Provider service 2 "+data);
                return {
                    name:"MyProvider Service Name",
                    age:66
                }
            }
        };
    })
    .constant('MyConstant', 22)
    .config(function (MyProviderServiceProvider,FirstServiceProvider){
        MyProviderServiceProvider.update();
        console.log("Config function");
    })
    .run(function ($rootScope){
        console.log("Run function");
    });
