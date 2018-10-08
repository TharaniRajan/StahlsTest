var models = require("../../models")
var statusCode = require('../../config/status');
var Sequelize = require('sequelize');
var configJSON = require('../../config/config.json');
var env = process.env.NODE_ENV || 'development';
var config = configJSON[env];
var sequelize = new Sequelize(config.name, config.username, config.password, config);
var statusCode = require('../../config/status');


// var confi = require('../../config/config.json');
// var env = process.env.NODE_ENV || 'development';
// var config = confi[env];
// var sequelize = new Sequelize(config.name, config.username, config.password, config);
// var statusCode = require('../../config/status');


// module.exports.getallSyncservice = function (object, callback) {
//     models.SyncService.findAll({
//         order: [
//             ['updatedAt', 'DESC']
//         ],
//     }).then(function (response) {
//         if (response.length != 0) {
//             callback(response, statusCode.ok)
//         } else {
//             callback("There is no SyncService", statusCode.no_content)
//         }
//     }).catch(function (error) {
//         callback(error, statusCode.error)
//     })
// }

module.exports.getallSyncservice = function (object, callback) {
    var offsetValue = parseInt(object.pageSize) * (parseInt(object.pageIndex));
    sequelize.query("SELECT COUNT(*)N'count' FROM SyncService WHERE \
    DATEDIFF(day,createdAt,DATEADD(hh,-4,GETDATE())) < :dayValue",{
        replacements:{
            dayValue: 90
        },
        type: Sequelize.QueryTypes.SELECT
    }).then(function(countResponse){
        sequelize.query("SELECT * FROM SyncService WHERE \
        DATEDIFF(day,createdAt,DATEADD(hh,-4,GETDATE())) < :dayValue ORDER BY :sortLabel  " + object.sortDirection.toUpperCase() + "  OFFSET :offsetValue ROWS FETCH NEXT :fetchValue ROWS ONLY", {
           replacements: {
               dayValue: 90,
               offsetValue: offsetValue,
               sortLabel: object.sortLabel,
               fetchValue: object.pageSize,
            },
            type: sequelize.QueryTypes.SELECT
       }).then(function (response) {
           console.log('get all sync service are ---- ', countResponse, countResponse[0].count);
        //    callback(response[0]);
        callback({
            "count": countResponse[0].count,
            "response": response
        }, statusCode.ok);
       }).catch(function (error) {
           callback(error)
       })
    }).catch(function(error){
        callback(error)
    })

}