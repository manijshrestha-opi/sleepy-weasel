;
(function() {
    'use strict';
    var app = angular.module('calendarViewApp', ['ui.calendar', 'firebase']);

    app.controller('CalendarViewCtrl', function($scope, $timeout, angularFire) {
        var ref = new Firebase('https://opihackathon.firebaseIO.com/employees');
        angularFire(ref.limit(15), $scope, "employees");

        $scope.events = [
            {   title: 'eat food',
                start: $.fullCalendar.parseDate('2014-01-01'),
                end: $.fullCalendar.parseDate('2014-01-04')
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

        $timeout(function(){
            $scope.myCalendar.fullCalendar('gotoDate', 2014, 0, 1) ;
        });
        /* event sources array*/
        $scope.eventSources = [$scope.events];
    });

})();