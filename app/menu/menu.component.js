angular.module('menu').component('menu', {
    templateUrl: 'menu/menu.template.html',
    controller:['$mdSidenav', function MenuController ($mdSidenav){
        var vm = this;
        vm.close = function(){
            $mdSidenav('right').close();
        };

    }]
});