import Route from '@ember/routing/route';

export default Route.extend({
    title: null,
    tag: null,
    content: null,

    actions: {
        updateNote(note) {
            let n = this.store.createRecord('note', {
                title: note.title,
                tag: note.tag,
                content: note.content
            }).save();
            this.transitionTo('notes');
        }
    }
});
