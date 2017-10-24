try{
/*
 * Do not edit this file by hand
 */ 
var Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_module = angular.module('Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start', ['adf.provider','builder','builder.components','validator.rules'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start', {
        title: 'Task002Start',
        editTitle :'Task002Start Settings',
        description: 'Task002Start Description',
        templateUrl: '/<<CONTEXT_ROOT>>/Task002Start/views/view.xhtml',
        controller: 'Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_Controller',
        controllerAs: 'Task002Start',
        frameless : 'false',
        previewImage: '/<<CONTEXT_ROOT>>/images/Task002Start/default.png',
        edit: {
          templateUrl: '/<<CONTEXT_ROOT>>/Task002Start/views/settings.xhtml'
        },
        application : "TaskDevelopmentProject0002A",
        gadgetGroup: "TaskDevelopmentProject0002A",
        id: "Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start",
        widgetName : "Task002Start",
        defaults:{ "title": "Task002Start",
  	      "structure": "6-6",
  	      "rows": [{
  	        "columns": [{
  	          "styleClass": "col-md-12",
  	          "widgets": [ {
  	              "type": "Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start",
  	              "title": "",
  	              "config": {
  	            	  "params":{
  	            	         
                                },
  	            	  "title":""
  	              	}
  	            }]
  	        }]
  	      }]
  	  }
              });
  });
   if(angular.module('Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start')){
    	wmBCGadgets.requires.push('Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start');
    	
    	Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_module.run(function(){
    		try{
	    		var dep=['builder','builder.components','validator.rules'];//define list of dependencies
	        	for(var module in dep){
	        		if(dep.hasOwnProperty(module)){
	        			angular.module(dep[module]);
	        			Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_module.requires.push(dep[module]);
	        		}
	        	}
    		}catch(exception){
    			console.error("Gadget Exception: "+exception);
    		}
    	});
    	 
    }

}
catch(exception){
	angular.module('wmBCGadgets').run(function(dashboard){
		dashboard.widgets["Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start"]= Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_module;
	})
	Task002Start_a830446c_6378_4357_a336_35b88b9182b9Start_module["error"]=exception;
	throw new GadgetException(exception);
}