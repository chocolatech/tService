angular.module('app').controller('AppCtrl', ['$mdSidenav',function($mdSidenav) {
    var vm = this;

    vm.toggleRight = function() 
    {
        $mdSidenav('right')
                .toggle();
    };
    vm.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };



}]);