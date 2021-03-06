angular.module('ClientService', []).factory('Client', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/clients');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(clientData) {
            return $http.post('/api/clients', clientData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/clients/' + id);
        }
    }

}]);
