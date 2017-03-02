(function() {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {

        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;

        function createWidget(pid, type) {
            return $http.post("/api/page/" + pid + "/widget?type=" + type);
        }

        function findWidgetsByPageId(pid) {
            return $http.get("/api/page/" + pid + "/widget");
        }

        function findWidgetById(wid) {
            return $http.get("/api/widget/" + wid);
        }

        function updateWidget(wid, widget) {
            return $http.put("/api/widget/" + wid, widget);
        }

        function deleteWidget(wid) {
            return $http.delete("/api/widget/" + wid);
        }
    }
})();