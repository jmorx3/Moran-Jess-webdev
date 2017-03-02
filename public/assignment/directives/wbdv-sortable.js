(function () {
    angular
        .module('WebAppMaker')
        .directive('adoSortable', sortableDir);

    function sortableDir() {
        function linkFunc(scope, element, attributes) {
            element.sortable({
                axis: 'y',
                scroll: false,
                opacity: 0.75,
                containment: "parent"
            });
        }
        return {
            link: linkFunc
        };
    }
})();