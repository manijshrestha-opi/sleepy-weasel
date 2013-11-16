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
    </div>
</div>
</body>
</html>
