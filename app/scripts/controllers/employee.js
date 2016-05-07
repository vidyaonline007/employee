'use strict';

/**
 * @ngdoc function
 * @name employeelistApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the employeelistApp
 */
angular.module('employeelistApp')
  .controller('EmployeeCtrl', function ($scope,$routeParams) {
  	console.debug($routeParams.id)
  	
  	var id=parseInt($routeParams.id,10)
    var empList=[{
 id:1,
'name':'Akhila Kulkarni', 
'email':'<akhila@4sight-health.com>'
},
{
	id:2,
'name':'Balachander Agoramurthy' ,
'email':'<bala@4sight-health.com>'
},
{
	id:3,
'name':'Geetha Sanjay', 
'email':'<geetha@4sight-health.com>'
},
{
	id:4,
'name':'Jitendra Rajput',
'email':'<jitu@4sight-health.com>'
},
{
	id:5,
'name':'Kapil Jain', 
'email':'<kapil@4sight-health.com>'
},
{
	id:6,
'name':'Kishore Jose' ,
'email':'<kishore@4sight-health.com>'
},
{
	id:7,
'name':'Latanshu Chauhan' ,
'email':'<latanshu@4sight-health.com>'
},
{
	id:8,
'name':'Manikandan Ramaiah ',
'email':'<mani@4sight-health.com>'
},
{
	id:9,
'name':'Pradnya Jere- Anjal', 
'email':'<pradnya@4sight-health.com>'
},
{
	id:10,
'name':'Rakesh Sharma' ,
'email':'<rakesh@4sight-health.com>'
},
{
	id:11,
'name':'Ramakrishna Bhat' ,
'email':'<ramki@4sight-health.com>'
},
{
	id:12,
'name':'Rohit Mudambi', 
'email':'<rohit@4sight-health.com>'
},
{
	id:13,
'name':'Shailaja KC' ,
'email':'<intern4@4sight-health.com>'
},
{
	id:14,
'name':'Shweta Sangurmath' ,
'email':'<shweta@4sight-health.com>'
},
{
	id:15,
'name':'Srinivasa C P ',
'email':'<srinivasa@4sight-health.com>'
},
{
	id:16,
'name':'Srividhya Sankar' ,
'email':'<sri@4sight-health.com>'
},
{
	id:17,
'name':'Subhashini Rajamani',
'email':'<subhashini@4sight-health.com>'
},
{
	id:18,
'name':'Vasanthi Palanivel ',
'email':'<vasanthi@4sight-health.com>'
},
{
	id:19,
'name':'Vidyalakshmi R ',
'email':'<vidya@4sight-health.com>'
},
{
	id:20,
'name':'Vijaygopal R ',
'email':'<vijay@4sight-health.com>'
},
{
	id:21,
'name':'Balasubramani PK', 
'email':'<balasubramani.pk@4sight-health.com>'
},
{
	id:22,
'name':'Ramesh Mudimelapu ',
'email':'<ramesh.mudimelapu@4sight-health.com>'
}];
  	for(var index in empList){
  		var employee=empList[index]
  		if(employee.id===id){
  			
  			$scope.emp = employee;
  			break;
  		}
  	}
  });
