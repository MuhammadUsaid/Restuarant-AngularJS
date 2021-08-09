var myApp = angular.module("myApp", []);
myApp.controller("Controller", function($scope, $http){
    $scope.message = "Hello World";
    $scope.array = [
        {
            Name: "Usaid",
            age: 22
        }
    ];
    console.log(angular.toJson($scope.array));
    $http.get('').success(function(data){
        $scope.var = data;
    });
});