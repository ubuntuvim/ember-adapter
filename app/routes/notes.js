import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.findAll('note');
	},
	actions: {
		deleteNote(noteId) {
			this.store.findRecord('note', noteId, { backgroundReload: false }).then((note) => {
			  note.destroyRecord(); // => DELETE to /posts/2
			});
		}
	}
});
