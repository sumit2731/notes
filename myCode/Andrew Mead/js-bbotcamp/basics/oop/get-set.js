const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.locations.push(this._location);
    }
};

data.location = '              Pune                    ';
console.log(data._location);
data.location = 'Phagwara';
console.log(data);
