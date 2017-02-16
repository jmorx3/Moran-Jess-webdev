(function() {
    angular
        .module("WebAppMaker")
        .factory('WidgetService', widgetService);

    function widgetService() {

        var widgets = [
          
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}

        ];

        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;

        function createWidget(pageId, type) {
            var newWidget = {
                "_id": String(new Date().getTime()),
                "pageId": pageId,
                "widgetType": type
            };
            widgets.push(newWidget);
            return newWidget._id;
        }

        function findWidgetsByPageId(pageId) {
            var widgetList = [];
            for (var w in widgets) {
                if (widgets[w].pageId === pageId) {
                    widgetList.push(widgets[w]);
                }
            }
            return widgetList;
        }

        function findWidgetById(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    return angular.copy(widgets[w]);
                }
            }
            return null;
        }

        function updateWidget(widgetId, newWidget) {
            for (var w in widgets) {
                var widget = widgets[w];
                if (widget._id === widgetId) {
                    widget.name = newWidget.name;
                    widget.text = newWidget.text;
                    var type = widget.widgetType;
                    if (type === 'YOUTUBE' || type === 'IMAGE') {
                        widget.url = newWidget.url;
                        widget.width = newWidget.width;
                    } else if (type === 'HEADING') {
                        widget.size = newWidget.size;
                    }
                }
            }
        }

        function deleteWidget(widgetId) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets.splice(w, 1);
                }
            }
        }
    }
})();