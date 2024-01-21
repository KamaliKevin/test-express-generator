let Bicycle = require("../../models/Bicycle");

// GET Method:
exports.bicycleList = function(req, res) {
    res.status(200).json ({
        bicycles: Bicycle.allBicycles
    });
};


// POST Method:
exports.bicycleCreate = function(req, res){
    let bicycle = new Bicycle(req.body.id, req.body.color, req.body.model);
    bicycle.location = [req.body.latitude, req.body.longitude];

    Bicycle.add(bicycle);

    res.status(201).json({
        bicycle: bicycle
    });
}


// DELETE Method:
exports.bicycleDelete = function(req, res){
    Bicycle.removeById(req.body.id);
    res.status(204).send();
};


// PUT Method:
exports.bicycleUpdate = function (req, res) {
    Bicycle.updateById(req.body.id, req.body);
    res.status(201).json({
        bicycle: Bicycle.allBicycles[req.body.id - 1]
    });
}