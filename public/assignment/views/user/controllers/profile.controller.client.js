(function() {
    angular

        .module("WebAppMaker")
        .controller("profileController", profileController);


    function profileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams['uid'];


        function init() {
            var promise = UserService.findUserById(userId);
            promise.success(function(user) {
                vm.user = user;
                console.log(user); 
            });
        }
        init();
    }
})();