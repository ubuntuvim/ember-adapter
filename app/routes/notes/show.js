import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	model(params) {
		// GET /note/1
		return this.store.findRecord('note', params.note_id)  // => GET /blog-posts/1
		    .then(function(note) {
		    Ember.Logger.info("查询到的note：", note);
		    return note;
		});
	}
});
