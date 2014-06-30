/* global Backbone */
var app = app || {};

(function() {
    'use strict';

    var workspaceEvents = _.extend({}, Backbone.Events);
    
   $("#switchWorkSpace").bind('click', function(){
    	console.log('called switch work space');
    	workspaceEvents.triggerFetch();
    });
   
    workspaceEvents.triggerFetch = function(){
    	workspaceEvents.trigger('fetch');
    };
    
    workspaceEvents.triggerChange = function(newWorkspaceId){
    	workspaceEvents.trigger('change', newWorkspaceId);
    };
    
   
   
    app.workspaceEvents = workspaceEvents;
})();