import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

CollectionNameOnClientSide = new Mongo.Collection('employees');
var employeesData = Meteor.subscribe('employeesPubSub');

Template.mytemp.helpers({
  'subcribedDataNotAvailable' : function(){
        return !employeesData.ready();
    },
   'employeeNumbers' : () =>{
     console.log("aa = " +  CollectionNameOnClientSide.find({},{_id:0, empId:1}) );
     return CollectionNameOnClientSide.find({},{_id:0, empId:1});
  }
});
