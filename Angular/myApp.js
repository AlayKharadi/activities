// module is used to define an angualr app module
// create multiple different modules and then control different part of the application
// use this apps to create and control a big app with multiple module
let app = angular.module('myApp', []);

//Data binding is used to bind the model and the view
//view is where we see data
//model is collection of data

//every app have a root scope which can be used throught out the app
app.run(($rootScope) => {
    $rootScope.value = 5;
})

// you can also create custom filter using app.filter and use like any buil-in filter
// the filter has name and callback function as param
// the second callback fucntion returns a fucntion with one value as param

// app.filter('myFilter', () => {
//     reutnr (x) {

//     }
// })

// you can create your own service 

// app.service('myService', () => {
//     this.myFunc = () => {
//         return new Date.now();
//     }
// })
// to use this in filter 
// app.filter('myFilter', [ 'myService', () => {
//     reutnr (x) {
//          return myService.myFunc(); 
//     }
// }])