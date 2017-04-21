(function () {
    angular
        .module("WebAppMaker")
        .controller("FlickrImageSearchController", flickrImageSearchController);

    function flickrImageSearchController(FlickrService, WidgetService, $location, $routeParams) {
        var vm = this;
        vm.searchPhotos = searchPhotos;
        vm.selectPhoto = selectPhoto;

        function init() {
            vm.userId = $routeParams['uid'];
            vm.websiteId = $routeParams['wid'];
            vm.pageId = $routeParams['pid'];
            vm.widgetId = $routeParams['wgid'];
            console.log(vm);
        }

        init();

        function searchPhotos(searchTerm) {
            FlickrService.searchPhotos(searchTerm).then(function(response) {
                data = response.data.replace("jsonFlickrApi(","");
                data = data.substring(0, data.length - 1);
                data = JSON.parse(data);
                vm.photos = data.photos;
            }, function () {
                vm.error = 'Unable to load images. Please try again.';
            });
        }

        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
            var errorFunction = function () {
                vm.error = 'Error: Photo not added, please try again soon.';
            };
            WidgetService.findWidgetById(vm.widgetId).then(function(response) {
                var newWidget = response.data;
                newWidget.url = url;
                WidgetService.updateWidget(vm.widgetId, newWidget).then(function() {
                    $location.url('/user/' + vm.uid + '/website/' + vm.wid + '/page/' + vm.pid + '/widget/' + vm.wgid);
                }, errorFunction);
            }, errorFunction);
        }
    }
})();