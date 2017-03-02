(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, $location, WidgetService) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];

        function init() {
            var promise = WebsiteService.findWebsitesByUser(vm.userId);
            promise.success(function (websites) {
                vm.websites = websites;
            });
        }
        init();

        vm.createWidget = createWidget;

        function createWidget(type) {
            var createWidgetPromise = WidgetService.createWidget(vm.pageId, type);
            createWidgetPromise.success(function(widget) {
                $location.url("/user/" + vm.userId +
                    "/website/" + vm.websiteId +
                    "/page/" + vm.pageId +
                    "/widget/" + widget._id);
            })

        }

    }
})();
