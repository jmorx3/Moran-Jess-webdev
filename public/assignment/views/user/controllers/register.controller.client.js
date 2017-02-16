(function() {
    angular
        .module("WebAppMaker")
        .controller("registerController", registerController);

    function registerController(UserService, $location) {
        var vm = this;
        vm.register = register;

        function register(user) {
            var newUserId = UserService.createUser(user);
            if (newUserId == null) {
                vm.error = "User already exists!";
            } else {
                $location.url('/profile/' + newUserId);
            }
        }
    }
})();