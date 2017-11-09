import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.notWorkingChild.onCreated(function() {
  this.user_copy = this.data.user
});

Template.notWorkingChild.helpers({
  getUser() {
    return Template.instance().user_copy
  },
});

