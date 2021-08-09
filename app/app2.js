var myApp = angular.module("myApp", []);
myApp.controller("MyController", function($scope){
    $scope.menu = [
        {
            item: "Paratha",
            price: 40
        },
        {
            item: "Crispy Burger",
            price: 250
        },
        {
            item: "Zinger Burger",
            price: 300
        },
        {
            item: "Club Sandwich",
            price: 250
        }
    ];
    $scope.addItem = ()=>{
        $scope.menu.push(
            {
                item: $scope.newItem.name,
                price: parseInt($scope.newItem.price)
            }
        )
        $scope.newItem.name = "";
        $scope.newItem.price = ""
    };
    $scope.removeItem = (i)=>{
        index = $scope.menu.indexOf(i);
        $scope.menu.splice(index, 1)
    };
});