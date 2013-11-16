;
(function() {
    'use strict';
    var app = angular.module('calendarViewApp', ['ui.calendar', 'firebase']);

    app.controller('CalendarViewCtrl', function($scope, $timeout, angularFire) {
        var emplQuery = new Firebase('https://opihackathon.firebaseio.com/employees');
        var reservationQuery = new Firebase('https://opihackathon.firebaseio.com/bookingSeason/cabin/2014/summer/employeeReservation');
        angularFire(emplQuery, $scope, "employees");
        angularFire(reservationQuery, $scope, "reservations");
        //$scope.employees = angularFireCollection(emplQuery, syncReservations);
        //$scope.reservations = angularFireCollection(reservationQuery, syncReservations);

        $scope.events = [
        ];

        $scope.$watch("employees", asyncReservations);
        $scope.$watch("reservations", asyncReservations);

        function asyncReservations() {
            $timeout(syncReservations);
        }

        function syncReservations() {
            if($scope.employees && $scope.reservations) {
                $scope.events.length = 0;
                var calendarReservations = [];
                _.forOwn($scope.reservations, function(reservation, employeeId){
                    //console.log("employeeId::" , employeeId);
                    var employee = $scope.employees[employeeId];
                    //console.log("employees>>", employee);
                    var event = {start: $.fullCalendar.parseDate(reservation.start), end: $.fullCalendar.parseDate(reservation.end), title: employee.firstName};
                    $scope.events.push(event);
                });
                console.log("$scope.events", $scope.events);
                //$scope.events.push(calendarReservations);
            }

            console.log("calendarReservations: " , calendarReservations);
        }

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