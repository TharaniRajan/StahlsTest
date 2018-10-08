var models = require("../../models")
var Sequelize = require('sequelize');
var asyncLoop = require('node-async-loop')
var config = require('../../config/config.json');
const log = require("../../config/logConfig.js");

var SalesOrderItems = require("./SalesOrderItemsController");

var DataExportDate = null;




module.exports.migrateSalesOrder = function () {
    log.info('in migrateSalesOrder');

    models.sequelize.query("SELECT * FROM SyncService Where SyncTable = 'SalesOrder'",
        { type: models.sequelize.QueryTypes.SELECT })
        .then(date => {

            if (date[0].DataExportDate != null) {
                console.log('---------DateDataexportdate----------->>>>>.', date)
                log.info('before top query P_SalesOrder--------->');

                models.sequelize.query("SELECT * FROM P_SalesOrder Where DataExportDate > '" + date[0].DataExportDate.toISOString() + "' ORDER BY DataExportDate DESC",
                    { type: models.sequelize.QueryTypes.SELECT })
                    .then(data1 => {
                        DataExportDate = date[0].DataExportDate;
                        log.info('after top query P_SalesOrder--------->');
                        if (data1.length !== 0) {
                            console.log('---------Data1Dataexportdate----------->>>>>.')
                            DataExportDate = data1[0].DataExportDate;

                            log.info('before top query SalesOrder--------->');
                            models.sequelize.query("SELECT TOP 1 * FROM SalesOrder ORDER BY DataExportDate DESC",
                                { type: models.sequelize.QueryTypes.SELECT })
                                .then(response => {
                                    log.info('after top query SalesOrder--------->');
                                    if (response.length !== 0) {
                                        console.log('---------responseDataexportdate----------->>>>>.')
                                        if (DataExportDate > response[0].DataExportDate) {
                                            var count = 0;
                                            models.sequelize.query("SELECT * FROM P_SalesOrder where DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'", { type: models.sequelize.QueryTypes.SELECT })
                                                .then(data2 => {
                                                    models.sequelize.query("SELECT COUNT(*)N'Count' FROM P_SalesOrder where DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "'", { type: models.sequelize.QueryTypes.SELECT })
                                                        .then(Countvalue => {
                                                            console.log('---------------Countvalue---------->>>', Countvalue[0].Count);
                                                            log.info('Data Count' + Countvalue[0].Count)
                                                            models.SyncService.update({ SyncOperation: false, TotalCount: Countvalue[0].Count },
                                                                { where: { SyncTable: 'SalesOrder' } }
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
                                                                        console.log('---------data2Dataexportdate----------->>>>>.', response[0].DataExportDate.toISOString())
                                                                        models.sequelize.query("select * from P_SalesOrder a \
                                                  where exists (select 1 \
                                                              from SalesOrder b \
                                                              where a.OrderID = b.OrderID) \
                                                              And a.DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "' ORDER BY OrderID OFFSET 0 ROW FETCH NEXT 100 ROW ONLY", { type: models.sequelize.QueryTypes.SELECT })
                                                                            .then(updateData => {
                                                                                // console.log('---------Updaterecords--------',updateData);
                                                                                updateRecords(updateData)
                                                                            })

                                                                        models.sequelize.query("select * from P_SalesOrder a \
                                                      where not exists (select 1 \
                                                                  from SalesOrder b \
                                                                  where a.OrderID = b.OrderID) \
                                                                  And a.DataExportDate > " + "'" + response[0].DataExportDate.toISOString() + "' ORDER BY OrderID OFFSET 0 ROW FETCH NEXT 100 ROW ONLY", { type: models.sequelize.QueryTypes.SELECT })
                                                                            .then(insertData => {
                                                                                // console.log('---------Insertrecords--------',insertData);
                                                                                insertRecords(insertData, response[0].DataExportDate.toISOString())
                                                                            })


                                                                    } else {
                                                                        log.info("-------->SalesOrder Uptodate")
                                                                        nextTable("Complete-NoDataFound");
                                                                    }
                                                                }
                                                            } else {
                                                                log.info("-------->SalesOrder Uptodate")
                                                                nextTable("Complete-NoDataFound");

                                                            }

                                                        })
                                                })


                                        } else {
                                            log.info("--------> SalesOrder Uptodate")
                                            nextTable("Complete-NoDataFound");
                                        }
                                    } else {
                                        log.info("--------> SalesOrder FreshMigrate")
                                        models.sequelize.query("SELECT * FROM P_SalesOrder ORDER BY DataExportDate DESC", { type: models.sequelize.QueryTypes.SELECT })
                                            .then(data3 => {
                                                if (data3.length != 0) {
                                                    DataExportDate = data3[0].DataExportDate.toISOString()
                                                    insertRecords(data3,DataExportDate);
                                                } else { nextTable("Complete-NoDataToExport"); log.info("-------->No data in P_SalesOrder") }
                                            }).catch(function (error) {
                                                log.error('Error SalesOrder:' + error);
                                                nextTable("PolypmTable-NotExist");
                                            })
                                    }
                                })

                        } else { nextTable("Complete-NoDataFound"); log.info("--------> SalesOrder Uptodate!") }
                    })

            } else {
                log.info("--------> SalesOrder FreshMigrate")
                models.sequelize.query("SELECT * FROM P_SalesOrder ORDER BY DataExportDate DESC", { type: models.sequelize.QueryTypes.SELECT })
                    .then(data3 => {
                        if (data3.length != 0) {
                            DataExportDate = data3[0].DataExportDate.toISOString()
                            insertRecords(data3,DataExportDate);
                        } else { nextTable("Complete-NoDataToExport"); log.info("-------->No data in P_SalesOrder") }
                    }).catch(function (error) {
                        log.error('Error SalesOrder:' + error);
                        nextTable("PolypmTable-NotExist");
                    })
            }
        })

}


async function insertRecords(data, date) {
    log.info('in insertRecords SalesOrder')

    models.SalesOrder.bulkCreate(data).then(async function (response) {
        // console.log('---------Response-------->>>>>>',response);
        log.info("--------> Success SalesOrder Migrated!")
        //  log.info("--------> Sleeping for 2secs..")
        //  await sleep(2000)   
        nextTable("Complete-DataExported");
        models.sequelize.query("SELECT COUNT(*) N'MigrateCount' FROM SalesOrder where DataExportDate > " + "'" + date + "'", { type: models.sequelize.QueryTypes.SELECT })
            .then(migratedcount => {
                models.SyncService.update({ SyncOperation: false, MigratedCount: migratedcount[0].MigrateCount },
                    { where: { SyncTable: 'SalesOrder' } }
                ).then(function (countresponse) {
                }).catch(function (error) {
                    log.info('Error When updating MigratedCount:' + error);
                })
            }).catch(function (error) {
                log.info('Error in Migrate Count:' + error);
            })
    }).catch(function (error) {
        // console.log('--------Error-------->>>>',error);
        log.info('Error SalesOrder:' + error);
        nextTable("Error-DataExport");
    })


}


async function updateRecords(data) {
    log.info('in updateRecords SalesOrder')
    var count = 0;
    for (i = 0; i < data.length; i++) {
        count++;

        models.SalesOrder.update(data[i], {
            where: {
                OrderID: data[i].OrderID
            }
        }).then(async function (response) {

        }).catch(function (error) {
            log.info('Error SalesOrder:' + error);
            nextTable("Error-DataExport");
        })
        // await sleep(100)
    }


}




function nextTable(status) {
    log.info('in nextTable SalesOrder')
    models.SyncService.update({ SyncOperation: true, SyncStatus: 'InProgress' },
        { where: { SyncTable: 'SalesOrderItems' } }
    ).then(function (response) {

        models.SyncService.update({ SyncOperation: false, SyncStatus: status, DataExportDate: DataExportDate },
            { where: { SyncTable: 'SalesOrder' } }
        ).then(function (response) {
            log.info('out nextTable SalesOrder')
            SalesOrderItems.migrateSalesOrderItems();
        })
    })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}








