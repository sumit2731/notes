const assert = require('assert');
const User = require('../src/user');

describe('REading users out of database' ,() => {
    let joe;
    beforeEach((done) => {
        console.log('nested before each');
        joe = new User ({name: 'Joe'});
        joe.save()
            .then(() => {
                done();
            });
    });
    it('finds all users with aname of joe',(done) => {
        User.find({ name: 'Joe'})
            .then(users => {
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            });
    });
    it('Find a user with particular id', (done) => {
        User.findOne({_id: joe._id})
            .then((user) => {
                assert(user.name === 'Joe');
                done();
            });
    });
});