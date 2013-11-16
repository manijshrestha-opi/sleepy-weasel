package sleepy.weasel

import grails.plugin.springsecurity.annotation.Secured

class CalendarViewController {

    @Secured('IS_AUTHENTICATED_ANONYMOUSLY')
    def index() { }
}
