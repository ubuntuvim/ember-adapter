import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	// id: DS.attr('string'),

	title: DS.attr('string'),
	
	content: DS.attr('string'),
	
	tag: DS.attr(),

	createDate: DS.attr("date"),

	updateDate: DS.attr("date")
});
