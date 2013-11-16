;
(function() {
    'use strict';
    var app = angular.module('calendarViewApp', ['ui.calendar']);

    app.controller('CalendarViewCtrl', function($scope) {

        $scope.events = [
            {   title: 'eat food',
                start: new Date(),
                end: new Date(new Date().getTime() + (48*60*60*1000))
            }
        ];

        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                }
//                ,
//                dayClick: $scope.alertEventOnClick,
//                eventDrop: $scope.alertOnDrop,
//                eventResize: $scope.alertOnResize
            }
        };
        /* event sources array*/
        $scope.eventSources = [$scope.events];
    });

})();