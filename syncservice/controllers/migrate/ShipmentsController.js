var models = require("../../models")
var Sequelize = require('sequelize');
var asyncLoop = require('node-async-loop')
var config = require('../../config/config.json');
const log = require("../../config/logConfig.js");

var ShipmentItems = require("./ShipmentItemsController");

var DataExportDate = null;



module.exports.migrateShipments = function () {
    log.info('in migrateShipments');

    models.sequelize.query("SELECT * FROM SyncService Where SyncTable = 'Shipments'",
        { type: models.sequelize.QueryTypes.SELECT })
        .then(date => {

            if (date[0].DataExportDate != null) {
                models.sequelize.query("SELECT * FROM P_Shipments Where DataExportDate > '" + date[0].DataExportDate.toISOString() + "' ORDER BY DataExportDate DESC",
                    { type: models.sequelize.QueryTypes.SELECT })
                    .then(data1 => {
                        DataExportDate = date[0].DataExportDate;
                        if (data1.length !== 0) {
                            DataExportDate = data1[0].DataExportDate;

                            // models.Shipments.findAll({ limit: 1, order: [ [ 'DataExportDate', 'DESC' ]]}).then(function(response){
                            models.sequelize.query("SELECT TOP 1 * FROM Shipments ORDER BY DataExportDate DESC",
                                { type: models.sequelize.QueryTypes.SELECT })
                                .then(response => {
                                    log.info('after top query Shipments--------->');

                                    if (response.length !== 0) {
                                        if (DataExportDate > response[0].DataExportDate) {

                                            models.sequelize.query("SELECT * FROM P_Shipments where DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'", { type: models.sequelize.QueryTypes.SELECT })
                                                .then(data2 => {
                                                    models.sequelize.query("SELECT COUNT(*)N'Count' FROM P_Shipments where DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'", { type: models.sequelize.QueryTypes.SELECT })
                                                        .then(Countvalue => {
                                                            console.log('---------------Countvalue---------->>>', Countvalue[0].Count);
                                                            log.info('Data Count' + Countvalue[0].Count)
                                                            models.SyncService.update({ SyncOperation: false, TotalCount: Countvalue[0].Count },
                                                                { where: { SyncTable: 'Shipments' } }
                                                            ).then(function (countresponse) {
                                                            }).catch(function (error) {
                                                                log.info('Error When updating TotalCount:' + error);
                                                            })
                                                            count = Countvalue[0].Count;
                                                            console.log('---------Total Count----------', count);
                                                            if (count.length !== 0) {
                                                                var looplength = count / 100;
                                                                console.log('---------calculatevalue---------', looplength)
                                                                var value = Math.trunc(looplength);
                                                                console.log('--------Value---------->>>', value);
                                                                if (looplength >= value) {
                                                                    var looplength = value + 1;
                                                                }
                                                                console.log('---------Iterate---------', looplength)
                                                                for (i = 0; i < looplength; i++) {
                                                                    if (data2.length != 0) {
                                                                        models.sequelize.query("select * from P_Shipments a \
                                where exists (select 1 \
                                            from Shipments b \
                                            where a.ShipmentID = b.ShipmentID) \
                                            And a.DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'ORDER BY ShipmentID OFFSET 0 ROW FETCH NEXT 100 ROW ONLY", { type: models.sequelize.QueryTypes.SELECT })
                                                                            .then(updateData => {
                                                                                updateRecords(updateData)
                                                                            })

                                                                        models.sequelize.query("select * from P_Shipments a \
                                    where not exists (select 1 \
                                                from Shipments b \
                                                where a.ShipmentID = b.ShipmentID) \
                                                And a.DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'ORDER BY ShipmentID OFFSET 0 ROW FETCH NEXT 100 ROW ONLY", { type: models.sequelize.QueryTypes.SELECT })
                                                                            .then(insertData => {
                                                                                insertRecords(insertData, response[0].DataExportDate.toISOString())
                                                                            })
                                                                    } else {
                                                                        log.info("--------> No Records To Migrate!")
                                                                        nextTable("Complete-NoDataFound");
                                                                    }
                                                                }
                                                            } else {
                                                                log.info("-------->Shipments Uptodate")
                                                                nextTable("Complete-NoDataFound");

                                                            }

                                                        })
                                                })


                                        } else {
                                            log.info("--------> Shipments Uptodate")
                                            nextTable("Complete-NoDataFound");
                                        }
                                    } else {
                                        log.info("--------> Shipments FreshMigrate")
                                        models.sequelize.query("SELECT * FROM P_Shipments ORDER BY DataExportDate DESC", { type: models.sequelize.QueryTypes.SELECT })
                                            .then(data3 => {
                                                if (data3.length != 0) {
                                                    DataExportDate = data3[0].DataExportDate.toISOString()
                                                    insertRecords(data3,DataExportDate);
                                                } else { nextTable("Complete-NoDataToExport"); log.info("-------->No data in P_Shipments") }
                                            }).catch(function (error) {
                                                log.error('Error Shipments:' + error);
                                                nextTable("PolypmTable-NotExist");
                                            })
                                    }
                                })

                        } else { nextTable("Complete-NoDataFound"); log.info("--------> Shipments Uptodate") }
                    })



            }

            else {
                log.info("--------> Shipments FreshMigrate")
                models.sequelize.query("SELECT * FROM P_Shipments ORDER BY DataExportDate DESC", { type: models.sequelize.QueryTypes.SELECT })
                    .then(data3 => {
                        if (data3.length != 0) {
                            DataExportDate = data3[0].DataExportDate.toISOString()
                            insertRecords(data3,DataExportDate);
                        } else { nextTable("Complete-NoDataToExport"); log.info("-------->No data in P_Shipments") }
                    }).catch(function (error) {
                        log.error('Error Shipments:' + error);
                        nextTable("PolypmTable-NotExist");
                    })

            }
        })


}

async function insertRecords(data, date) {
    log.info('in insertRecords Shipments')

    models.Shipments.bulkCreate(data).then(async function (response) {

        log.info("--------> Success Shipments Migrated!")
        //  log.info("--------> Sleeping for 2secs..")
        //  await sleep(2000)   
        nextTable("Complete-DataExported");
        models.sequelize.query("SELECT COUNT(*) N'MigrateCount' FROM Shipments where DataExportDate > " + "'" + date + "'", { type: models.sequelize.QueryTypes.SELECT })
            .then(migratedcount => {
                models.SyncService.update({ SyncOperation: false, MigratedCount: migratedcount[0].MigrateCount },
                    { where: { SyncTable: 'Shipments' } }
                ).then(function (countresponse) {
                }).catch(function (error) {
                    log.info('Error When updating MigratedCount:' + error);
                })
            }).catch(function (error) {
                log.info('Error in Migrate Count:' + error);
            })

    }).catch(function (error) {
        log.info('Error Shipments:' + error);
        nextTable("Error-DataExport");
    })


}

async function updateRecords(data) {
    log.info('in updateRecords Shipments');
    var count = 0;
    for (i = 0; i < data.length; i++) {
        count++;

        models.Shipments.update(data[i], {
            where: {
                ShipmentID: data[i].ShipmentID
            }
        }).then(async function (response) {

        }).catch(function (error) {
            log.error("Error Shipments:" + error);
            nextTable("Error-DataExport");

        })

        // await sleep(100)
    }


}

function nextTable(status) {
    log.info('in nextTable Shipments');

    models.SyncService.update({ SyncOperation: true, SyncStatus: 'InProgress' },
        { where: { SyncTable: 'ShipmentsItems' } }
    ).then(function (response) {

        models.SyncService.update({ SyncOperation: false, SyncStatus: status, DataExportDate: DataExportDate },
            { where: { SyncTable: 'Shipments' } }
        ).then(function (response) {
            log.info('out nextTable Shipments');
            ShipmentItems.migrateShipmentItems();
        })
    })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  