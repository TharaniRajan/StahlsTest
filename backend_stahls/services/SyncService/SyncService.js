var SyncServiceDao = require("../../daos/SyncService/SyncServiceDao");

module.exports.getallsyncservice = function (object, callback) {
    SyncServiceDao.getallSyncservice(object, function (response, status) {
        callback(response, status);
    })
}