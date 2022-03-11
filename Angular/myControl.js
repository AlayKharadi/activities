//controller which controls the angluar app
//controller is basically a javascript object
//and controller have a scope which can be used with that particular controller
app.controller('myControl', ($scope, $location, $timeout) => {
    $scope.myUrl = $location.absUrl();
    $scope.value = 10;
    $scope.firstname = '';
    $scope.lastname = '';
    $timeout(() => {
        $scope.firstname = 'John';
        $scope.lastname = 'Doe';
    }, 5000);
    $scope.languages = [
        'English',
        'Hindi',
        'Gujarati',
        'Tamil',
        'Bangla',
        'Malayalam'
    ];

    $scope.theme = 'light';

    $scope.changeTheme = () => {
        if($scope.theme === 'light'){
            $scope.theme = 'dark';
        } else {
            $scope.theme = 'light';
        }
    }
})
//a directive that is created to work with
//use camle case while writing the name of the new directive
//then you can use it in app with '-' seperated name
// e.g. myDirective => my-directive 
app.directive('myDirective', () => {
    return {
        //restrict is used to restirict the type of access you want to provide
        // 'EA' is default, for both element and attribute
        // E for element
        // A for attribute
        // C for class
        // M for comment
        restrict: 'EA',
        template: "Message from Directive constructor"
    };
})