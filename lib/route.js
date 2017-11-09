
let users = [
  {_id: '1', name:'Arthy'},
  {_id: '2', name:'Paul'},
  {_id: '3', name:'JeJe'},
]

FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});
FlowRouter.route('/pup/:user_id', {
  name: 'pup',
  action: function(params, queryParams) {
    BlazeLayout.render('pup', { user: _.findWhere(users, {_id: params.user_id}) });
  }
});