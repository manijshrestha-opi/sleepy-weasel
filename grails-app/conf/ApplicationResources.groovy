modules = {

    jquery {
        resource url:'/js/libs/jquery/jquery.min.js'
    }

    angular {
        resource url:'js/libs/angular/angular.min.js'
    }

    angularUi {
        dependsOn 'jquery', 'angular'
        resource url: 'js/libs/angular-ui/build/angular-ui.min.js'
        resource url: 'js/libs/angular-ui/build/angular-ui.min.css'
    }

    lodash {
        resource url: 'js/libs/lodash/dist/lodash.min.js'
    }

    angularUiCalendar {
        dependsOn 'angularUi'
        resource url: 'js/libs/angular-ui-calendar/src/calendar.js'
        resource url: 'js/libs/fullcalendar/fullcalendar.min.js'
    }

    calendarViewApp {
        dependsOn 'angularUiCalendar'
        resource url: 'js/apps/calendarView/app.js'
    }
}