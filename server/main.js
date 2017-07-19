import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

CollectionNameOnServerSide = new Mongo.Collection('employees'); 

Meteor.startup(() => {
  // code to run on server at startup

var books = { 
       empId: 'Book 1',
       createAt: new Date()
    };
CollectionNameOnServerSide.insert(books);    

});

Meteor.publish('employeesPubSub', function() { 
  console.log("aa = " +  CollectionNameOnServerSide.find({},{_id:0, empId:1}) );
    return CollectionNameOnServerSide.find({},{_id:0, empId:1});     
});

