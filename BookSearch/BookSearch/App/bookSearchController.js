(function () {
    'use strict';

    function bookSearchController($location, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.searchBook = function () {
            vm.searchQuery = vm.searchQuery.replace('-', '').replace('_', '');
            $http.get(vm.googleApiUrl + vm.searchQuery).then(function (result) {
                vm.books = result.data.items;
                vm.totalItems = result.data.totalItems;
            });
        }
        function activate() {
            vm.searchQuery = "";
            vm.googleApiUrl = "https://www.googleapis.com/books/v1/volumes?orderBy=relevance&&printType=books&&langRestrict=en&&maxResults=18&&q=";
        }

        activate();
    }

    angular
        .module('app')
        .controller('BookSearchController', bookSearchController);

    bookSearchController.$inject = ['$location', '$http'];
})();
