;
(function() {
    'use strict';
    var app = angular.module('calendarViewApp', ['ui.calendar', 'firebase']);

    app.service('EmployeeService', function(angularFire) {
        var emplQuery = new Firebase('https://opihackathon.firebaseio.com/employees');
        return {
            bindEmployees: function(scope, prop) {
                angularFire(emplQuery, scope, prop);
            }
        };
    });

    app.service('ReservationService', function(angularFire) {
        var reservationQuery = new Firebase('https://opihackathon.firebaseio.com/bookingSeason/cabin/2014/summer/employeeReservation');
        return {
            bindReservations: function(scope, prop) {
                angularFire(reservationQuery, scope, prop);
            }
        };
    });

    app.controller('CalendarViewCtrl', function($scope, $timeout, angularFire, EmployeeService, ReservationService) {
        $scope.employees = EmployeeService.bindEmployees($scope, 'employees');
        $scope.reservations = ReservationService.bindReservations($scope, 'reservations');
        $scope.events = [];

        $scope.$watch("employees", syncReservations);
        $scope.$watch("reservations", syncReservations);

        function syncReservations() {
            if($scope.employees && $scope.reservations) {
                $scope.events.length = 0;
                _.forOwn($scope.reservations, function(reservation, employeeId){
                    var employee = $scope.employees[employeeId];
                    if (employee) {
                        var event = constructEvent(reservation, employee);
                        $scope.events.push(event);
                    } else {
                        console.warn("Could not find employee with id:", employeeId);
                    }
                });
            }
        }

        function constructEvent(reservation, employee) {
            return {
                    start: $.fullCalendar.parseDate(reservation.start),
                    end: $.fullCalendar.parseDate(reservation.end),
                    title: employee.firstName
            }
        }

        $scope.modifyReservation = function(evt, jsEvent) {
            console.log('modifying reservation', evt);
        };

        $scope.uiConfig = {
            calendar:{
                height: 850,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                eventClick: $scope.modifyReservation,
                dayClick: $scope.modifyReservation
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