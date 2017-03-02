(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, $sce, WidgetService) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];

        function init() {
            var promise = WidgetService.findWidgetsByPageId(vm.pageId);
            promise.success(function(widgets) {
                vm.widgets = widgets;
            });
        }
        init();
        vm.trustUrl = trustUrl;
        vm.getTrustHtml = getTrustHtml;
        vm.getWidgetTemplateUrl = getWidgetTemplateUrl;

        function getWidgetTemplateUrl(type) {
            return 'views/widgets/templates/widget-' + type + '.view.client.html';
        }

        function getTrustHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function trustUrl(url) {
            return $sce.trustAsResourceUrl(url);
        }
    }
})();


// (function () {
//     angular
//         .module("WebAppMaker")
//         .controller("WidgetListController", WidgetListController);

//     function WidgetListController($routeParams, $sce, WidgetService) {
//         var vm = this;
//         vm.userId = $routeParams['uid'];


//         function init() {
//             var promise = WebsiteService.findWebsitesByUser(vm.userId);
//             promise.success(function (websites) {
//                 vm.websites = websites;
//             });
//         }

//         init();
//         // vm.trustUrl = trustUrl;
//         // vm.getTrustAsHtml = getTrustAsHtml;
//         // vm.getWidgetTemplateUrl = getWidgetTemplateUrl;

//         // function getWidgetTemplateUrl(type) {
//         //     return 'views/widgets/templates/widget-' + type + '.view.client.html';
//         // }

//         // function getTrustAsHtml(html) {
//         //     return $sce.trustAsHtml(html);
//         // }

//         // function trustUrl(url) {
//         //     return $sce.trustAsResourceUrl(url);
//         // }

//     }
// })();
