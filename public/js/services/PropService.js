angular.module('PropService', []).factory('Prop', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/props');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(propData) {
            return $http.post('/api/props', propData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/props/' + id);
        }
    }

}]);
