var Comment = DS.Model.extend({
    post: DS.belongsTo('post'),
    text: DS.attr('string')
});

export default Comment;
