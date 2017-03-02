(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        var api = {
            "createWebsite"   : createWebsite,
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };
        return api;

        function createWebsite(uid, website) {
            return $http.post("/api/user/" + uid + "/website", website);
        }

        function findWebsitesByUser(uid) {
            return $http.get("/api/user/" + uid + "/website");
        }

        function findWebsiteById(wid) {
            return $http.get("/api/website/" + wid);
        }

        function updateWebsite(wid, newSite) {
            return $http.put("/api/website/" + wid, newSite);
        }
        
        function deleteWebsite(wid) {
            return $http.delete("/api/website/" + wid);
        }
    }
})();