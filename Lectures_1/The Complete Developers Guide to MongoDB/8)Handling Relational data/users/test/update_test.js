const assert = require("assert");
const User = require("../src/user");

describe("Updating recods", (done) => {
  let joe;
  function assertName(operation, done) {
    operation.then(() => User.find({})).then(users => {
      assert(users.length === 1);
      assert(users[0].name === "Alex");
      done();
    });
  }

  beforeEach(done => {
    joe = new User({ name: "Joe", postCount : 0 });
    joe.save().then(() => done());
  });
  it("instance type using set n save", done => {
    console.log(joe);
    joe.set("name", "Alex");
    assertName(joe.save(),done);
  });
  it("A model instance can update", (done) => {
    assertName(joe.update({name: 'Alex'}),done)
  });

    it("A model class can update", (done) => {
        assertName(User.update({ name: 'Joe' }, { name: 'Alex' }),done);
    });
    it("Model class can update one record", (done) => {
        assertName(User.findOneAndUpdate({ name: 'Joe' },{name: 'Alex'}), done)
    });
    it("A model can find a record with an Id and update", (done) => {
        assertName(User.findByIdAndUpdate(joe._id,{ name: 'Alex' }), done)
    });

  xit("A user can have their post count incremented by one", (done) => {
    User.update({name: 'Joe'}, {$inc: {postCount: 1}})
    .then(() => User.findOne({ name: 'Joe'}))
      .then(user => {
        assert(user.postCount === 1);
        done();
      });
  });

});
