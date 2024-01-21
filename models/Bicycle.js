// Constructor
let Bicycle = function (id, color, model, location) {
    this.id = id;
    this.color = color;
    this.model = model;
    this.location = location;
}


// In-memory storage (ONLY FOR DEVELOPMENT PURPOSES):
Bicycle.allBicycles = [];


// Methods
Bicycle.add = function (bicycle) {
    this.allBicycles.push(bicycle);
}

Bicycle.removeById = function (bicycleId) {
    this.allBicycles.filter(bicycle => bicycle.id !== Number(bicycleId));
}

Bicycle.updateById = function (bicycleId, newData) {
    let foundBicycle = this.allBicycles.find(bicycle => bicycle.id === Number(bicycleId));

    if(foundBicycle){
        foundBicycle.color = newData.color || foundBicycle.color;
        foundBicycle.model = newData.model || foundBicycle.model;
        foundBicycle.location = newData.location || foundBicycle.location;
    }
}


// Hardcoded test example (ONLY FOR DEVELOPMENT PURPOSES):
let a = new Bicycle(1, "Red", "Trek", [28.503789, -13.853296]);
let b = new Bicycle(2, "Blue", "Orbea", [28.501367, -13.853476]);
Bicycle.add(a);
Bicycle.add(b);


// Export:
module.exports = Bicycle;