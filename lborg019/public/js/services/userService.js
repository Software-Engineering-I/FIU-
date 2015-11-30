/**
 * Created by Emmanuel on 10/23/2015.
 */
angular.module('userService', [])

    .factory('User', function($http) {

        // create a new object
        var userFactory = {};

        // get a single user
        userFactory.get = function(id) {
            return $http.get('/api/users/' + id);
        };

        // get all users
        userFactory.all = function() {
            return $http.get('/api/users/');
        };


        // create a user
        userFactory.create = function(userData) {
            return $http.post('/api/users/', userData);
        };

        // update a user
        userFactory.update = function(id, userData) {
            return $http.put('/api/users/' + id, userData);
        };

        // change a users project
        userFactory.changeProject = function(id, project){
            var data = {"userId": id,"project": project};
            return $http.put('/api/users/',data);
        };

        // delete a user
        userFactory.delete = function(id) {
            return $http.delete('/api/users/' + id);
        };

        // return our entire userFactory object
        return userFactory;

    });