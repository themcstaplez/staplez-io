/*! staplezio - v0.0.0 - 2014-11-06
* Copyright (c) 2014 ; Licensed  */
angular.module('srv.contact', [])
.factory('Contact', ['$http',
  function($http) {
    return {
      send: function(contactData) {
        return $http.post('/contact', contactData);
      }
    }
  }
  ])