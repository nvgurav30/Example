/*
var Person = function(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(person) {
    console.log(person);
}

var john = new Person('John','Deo');
logPerson(john);
*/
var myApp = angular.module('myApp',[]);
myApp.controller('mainController', function($http,$log,$scope,$filter){
   /* $scope.firstname = "John";
    $scope.formattedName = $filter('uppercase')($scope.firstname);
    $scope.lastname = "Doe";
    $scope.getName = function() {
        return $scope.firstname + " - " + $scope.lastname;
    };
    //console.log($scope);
    //console.log($log);
    $log.log("Hello.");
    $log.info("Information.");
    $log.warn("Warning.");
    $log.debug("Some debug.");
    $log.error("This was an erro.");
    */
    $http.get("Examples/data.json").then(function(response) {
        $scope.UserComments = response.data;
    });
    
});