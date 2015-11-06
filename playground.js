angular.module('playground', []);

angular.module('playground')
    .controller('MainCtrl', function ($rootScope, $scope, $http) {
      $scope.products = [];

      var productId = 1;

      $scope.addProduct = function () {
          if ($scope.newProductName) {
              $scope.products.push({ id: productId++, name: $scope.newProductName });
          }
      };
    });
