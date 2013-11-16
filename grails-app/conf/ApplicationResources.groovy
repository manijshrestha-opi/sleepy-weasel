modules = {

    jquery {
        resource url:'/js/libs/jquery/jquery.js'
    }

    angular {
        resource url:'js/libs/angular/angular.js'
    }

    ngfire {
        resource url:'js/libs/firebase/firebase.js'
        resource url:'js/libs/angular-fire/angularfire.js'
    }

    angularUi {
        dependsOn 'jquery', 'angular'
        resource url: 'js/libs/angular-ui/build/angular-ui.js'
        resource url: 'js/libs/angular-ui/build/angular-ui.css'
    }

    lodash {
        resource url: 'js/libs/lodash/dist/lodash.js'
    }

    angularUiCalendar {
        dependsOn 'angularUi'
        resource url: 'js/libs/angular-ui-calendar/src/calendar.js'
        resource url: 'js/libs/fullcalendar/fullcalendar.js'
        resource url: 'js/libs/fullcalendar/fullcalendar.css'
    }

    calendarViewApp {
        dependsOn 'angularUiCalendar', 'ngfire', 'lodash'
        resource url: 'js/apps/calendarView/app.js'
    }
}