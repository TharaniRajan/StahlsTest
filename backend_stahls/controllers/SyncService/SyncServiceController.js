var SyncService = require("../../services/SyncService/SyncService");

module.exports.getallsyncservice = function (req, res) {
    // console.log("i am in create all in", res);
    var object = req.body;
    SyncService.getallsyncservice(object, function (response, status) {
        res.json(response);
        res.status(status);
    })
}