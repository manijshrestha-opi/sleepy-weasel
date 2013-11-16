<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Calendar View</title>
    <r:require module="calendarViewApp"/>
</head>
<body>
<div id="page-body" role="main" ng-app="calendarViewApp">
    <div ng-controller="CalendarViewCtrl">
        <div ui-calendar="uiConfig.calendar" ng-model="eventSources" calendar="myCalendar">

        </div>

        <ul>
           <li ng-repeat="employee in employees">{{employee.firstName}}</li>
        </ul>

        <ul>
            <li ng-repeat="reservation in reservations">{{reservation.start}}</li>
        </ul>

    </div>
</div>
</body>
</html>
