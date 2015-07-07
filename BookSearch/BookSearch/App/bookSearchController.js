(function () {
    'use strict';

    function bookSearchController($location, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.searchBook = function() {
            $http.get(vm.googleApiUrl + vm.searchQuery).then(function(result) {
                vm.books= result.data.items;
            });
        }
        function activate() {
            vm.searchQuery = "";
            vm.googleApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
        }

        activate();
    }

    angular
        .module('app')
        .controller('BookSearchController', bookSearchController);

    bookSearchController.$inject = ['$location', '$http'];
})();
