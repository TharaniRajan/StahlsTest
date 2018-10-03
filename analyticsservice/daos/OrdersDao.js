var models = require("../models");

module.exports.getAllOrder = function (callback) {
    models.SalesOrder.findAll().then(function (response) {
        if (response.length != 0) {
            callback(response)
        } else {
            callback("There is no Order")
        }

    }).catch(function (error) {
        callback(error)
    })
}

module.exports.getAllOrderItems = function (callback) {
    models.SalesOrder.findAll({
        include: [
            {
                model: models.SalesOrderItems,
            }]
       
        }
    ).then(function (response) {
        if (response.length != 0) {
            callback(response)
        } else {
            callback("There is no Order")
        }

    }).catch(function (error) {
        callback(error)
    })
}

module.exports.getOrdershipmentdays = function (callback) {
    models.StahlsConfig.findOne({
        where: { name: 'ordershipmentdays' }
    }).then(function (response) {
        callback(response)
    }).catch(function (response) {
        callback(response)
    })
}

module.exports.getOrderreceiveddays = function (callback) {
    models.StahlsConfig.findOne({
        where: { name: 'orderreceiveddays' }
    }).then(function (response) {
        callback(response)
    }).catch(function (response) {
        callback(response)
    })
}

module.exports.getTopDesigndays = function (callback) {
    models.StahlsConfig.findOne({
        where: { name: 'ordertopdesigndays' }
    }).then(function (response) {
        callback(response)
    }).catch(function (response) {
        callback(response)
    })
}