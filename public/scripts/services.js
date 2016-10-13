'use strict';

angular.module('profileApp')
.service('profileService', ['$resource', function($resource){
	this.User = $resource('/user/:userId', {userId:'@id'});
	this.getUser = function() {
		var user = this.User.get({userId:'mqi'});
		return user;
	};
}]);