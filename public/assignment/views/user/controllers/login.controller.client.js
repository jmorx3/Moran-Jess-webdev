(function() {
    angular
        .module("WebAppMaker")
        .controller("loginController", loginController);

    function loginController(UserService, $location) {
        var vm = this;
        vm.login = login;

        function login(user) {
                var promise = UserService.findUserByCredentials(user.username, user.password);
                promise.success(function (user) {
                    if (user) {
                        $location.url('/user/' + user._id);
                    }
                }).error(function (error) {
                    vm.error = 'user does not exist: ' + user.username;
                });
            }
    }
})();

