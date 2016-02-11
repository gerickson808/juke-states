'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($urlRouterProvider){
    // when there is an empty route, redirect to /index   
    $urlRouterProvider.when('', '/albums');
})
