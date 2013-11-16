package com.objectpartners.calendar

import grails.transaction.Transactional

@Transactional
class FireHelperService {

    def grailsApplication

    String GenerateUrl(String objectName, String objectId = null) {
        String endBit = "${objectName}.json"
        if ( objectId ) {
            endBit = "${objectName}/${objectId}.json"
        }

        "${grailsApplication.config.firebase.baseurl}/${endBit}"
    }
}
