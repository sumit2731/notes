let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvalaible: function(partySize) {
      console.log(this);
    }
};
restaurant.checkAvalaible(4);