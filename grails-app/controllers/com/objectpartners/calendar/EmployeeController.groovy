package com.objectpartners.calendar

import grails.converters.JSON
import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse

class EmployeeController {
    def fireHelperService

    def index() {

        println 'in index'
    }

    def listAll() {
        RestBuilder rest = new RestBuilder()
        RestResponse resp = rest.get(fireHelperService.GenerateUrl('employees'))

        println 'In here !!'

        render resp.json as JSON
    }

    def update(UpdateEmployeeCommand cmd) {
        RestBuilder rest = new RestBuilder()
        RestResponse resp = rest.put(fireHelperService.GenerateUrl('employees', cmd.firebaseId)) {
            auth 'anonymous'
            json {
                firstName = cmd.firstName
                lastName = cmd.lastName
                email = cmd.email
            }
        }

        def output = [reseponseCode: resp.status]

        render output as JSON
    }
}

class UpdateEmployeeCommand {
    String firebaseId
    String firstName
    String lastName
    String email
}
