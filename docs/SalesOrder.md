![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. SalesOrder<br/>
    1. SalesOrder Diagrams<br/>
    1.1 [Salesorder Sequence](#salesorder-sequence-diagram)<br/>
    1.1.2 [Salesorder Qrganization Sequence](#salesorder-organization-sequence-diagram)<br/>
  1.2 [Salesorder](#salesorder-backend)
   <br/>
### SalesOrder Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ADMIN).jpg?raw=true"AdminFlow")
<br/>

## Salesorder Backend 

 **Get Request of Url(api/SalesOrder/getsalesordercountname)** <br/>
 Gets all the status count of the order from the backend.<br/>The process starts with **Salesorderrouter** which points to the controller file **controller.getcountbystatusname()** method where it takes the request and passes it to the service file of **service.getcountbystatusname()** and from service goes to the DAO file in **dao.getcountbystatusname()** and in the DAO file we use the **model** of salesorder from **SalesOrder.js** file and store the values to the database.
  <br/>
  <br/>
  **Post Request of Url (api/SalesOrder/getall)** <br/>
    Get the SalesOrder data from the UI as per the pagesize and pagenumber value from the request body. The process starts with the **Salesorderrouter** which points to the controller file **controller.getAllSalesOrder()** method from there it takes the request data pass it to the service file which is **service.getAllSalesOrder()** method from there it goes to the DAO file in the **dao.getAllSalesOrder()** and from the DAO we point the model file of **SalesOrder.js** file and store the values to the database.
   <br/>
    <br/>
  **Get Request of Url (api/SalesOrder/getSalesOrderFiltervalue)** <br/>
    Get the SalesOder filter values which based on Location,Tickets,Status,Style field. The process starts with the **Router** which is **getSalesOrderFiltervalue**  which goes the **Salesorderrouter** which points to the controller file **controller.getSalesOrderfiltervalue()** method from there it take the request and pass it to the service file which is **service.getSalesOrderfiltervalue()** method and form there it goes to the DAO file in the **dao.getSalesOrderfiltervalue()** and in the DAO file we point the model file of the **SalesOrder.js** file and store the values to the database.
    <br/>
    <br/>
  **Post Request of Url (api/SalesOrder/getSalesOrderbyStatusName)**<br/>
    Get the List of Orders according the status selected. The process starts with the **Router** which is **getSalesOrderbyStatusName** which pass to the **Salesorderrouter** which points to the controller file **controller.getSalesOrderStatusName()** method from there it take the request and pass it to the service file which is **service.getSalesOrderfiltervalue()** method and from there it goes to the DAO file in the **dao.getSalesOrderStatusName()** and in the DAO file we point the model file of the **SalesOrder.js** file and store the values to the database.
    <br/>
    <br/>
**Post Request of Url (api/SalesOrder/getExportSalesOrder)**<br/>
  Get the Salesorder data for export process. The process starts with the **Router** which is **getExportSalesOrder** which pass to the **Salesorderrouter** which pass to the controller file **controller.getExportSalesOrder()** method from there it takes the request to the service file which is **service.getExportSalesOrder()** method and from there it goes to the DAO file in the **dao.getExportSalesOrder()** and in the DAO file we point the model file of the **SalesOrder.js** file and store the values to the database.
  <br/>
  <br/>
**Get Request of Url (api/SalesOrder/get/:OrderID)**<br/>
  Gets the specific SalesOrder data. The process starts with the **Router** which is **get/:OrderId/** which pass the to the **Salesorderrouter** which then goes to the controller file **controller.getSalesOrderById()** method which gets the request value and passes to the service file which is **service.getSalesOrderById()** method and from there it goes to the DAO file in the **dao.getSalesOrderById()** and in the DAO we point the model file of the **SalesOrder.js** file and find that requested orderid.
