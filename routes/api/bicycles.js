let express = require('express');
let router = express.Router();
let BicycleControllerAPI = require("../../controllers/api/BicycleControllerAPI");

router.get("/", BicycleControllerAPI.bicycleList);
router.post("/create", BicycleControllerAPI.bicycleCreate);
router.delete("/delete", BicycleControllerAPI.bicycleDelete);
router.put("/update", BicycleControllerAPI.bicycleUpdate);

module.exports = router;