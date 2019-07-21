import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    router: service(),

	actions: {
		saveNotebook() {
			this.store.findRecord('note', this.get('model.id')).then((note) => {
			    note.set('title', this.get('model.title'));
			    note.set('tag', this.get('model.tag'));
			    note.set('content', this.get('model.content'));

			    note.save();  // => PATCH to '/notes/1'
			});

			this.get('router').transitionTo('notes');
		}
	}

});
