![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. SalesOrder<br/>
    1. SalesOrder Diagrams<br/>
    1.1 [Salesorder Sequence](#salesorder-sequence-diagram)<br/>
    1.1.2 [Salesorder Organization Sequence](#salesorder-organization-sequence-diagram)<br/>
  1.2 [Salesorder Admin_Flow](#salesorder-backend)<br/>
  1.3 [Salesorder Organization_Flow](#salesorder-by-organization-backend)
   <br/>
## SalesOrder Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ADMIN).jpg?raw=true"AdminFlow")
<br/>

## Salesorder Backend 

 **Get Request of Url(api/SalesOrder/getsalesordercountname)** <br/>
 Gets all the status count of the Salesorder from the backend.<br/>The process starts with **Salesorderrouter** which points to the controller file **controller.getcountbystatusname()** method where it takes the request and passes it to the service file of **service.getcountbystatusname()** and from service goes to the DAO file in **dao.getcountbystatusname()** and in the DAO file we use the **model** of salesorder from **SalesOrder.js** file and get the values from the database.
  <br/>
  <br/>
  **Post Request of Url (api/SalesOrder/getall)** <br/>
    Get the SalesOrder data to the UI as per the pagesize and pagenumber value from the request body. The process starts with the **Salesorderrouter** which points to the controller file **controller.getSalesOrderByCompanyCode()** method from there it takes the request data pass it to the service file which is **service.getSalesOrderByCompanyCode()** method from there it goes to the DAO file in the **dao.getAllSalesOrder()** and from the DAO we point the model file of **SalesOrder.js** file and get the values from the database.
   <br/>
    <br/>
  **Get Request of Url (api/SalesOrder/getSalesOrderFiltervalue)** <br/>
    Get the SalesOder filter values for the **Location,Tickets,Status,Style** field. The process starts with the **Router** which is **getSalesOrderFiltervalue**  which goes the **Salesorderrouter** which points to the controller file **controller.getSalesOrderfiltervalue()** method from there it take the request and pass it to the service file which is **service.getSalesOrderfiltervalue()** method and form there it goes to the DAO file in the **dao.getSalesOrderfiltervalue()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database.
    <br/>
    <br/>
  **Post Request of Url (api/SalesOrder/getSalesOrderbyStatusName)**<br/>
    Get the List of Orders according the status selected. The process starts with the **Router** which is **getSalesOrderbyStatusName** which pass to the **Salesorderrouter** which points to the controller file **controller.getSalesOrderStatusName()** method from there it take the request and pass it to the service file which is **service.getSalesOrderfiltervalue()** method and from there it goes to the DAO file in the **dao.getSalesOrderStatusName()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database.
    <br/>
    <br/>
   **Post Request of Url (api/SalesOrder/getSalesOrderFiltervalueData)**<br/>
        Get the Order Data and filter values based the selected filter option. The process starts with **Router** which is **getSalesOrderFilterValueData** which pass to the **Salesorderrouter** which points to the controller file **controller.getSalesOrderFilterValueData** method from there it takes the request and pass it to the service file which is **service.getSalesOrderFilterValueData** method and from there it goes to the DAO file in the **dao.getSalesOrderFilterValueData** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database. 
    <br/>
    <br/>
**Post Request of Url (api/SalesOrder/getExportSalesOrder)**<br/>
  Get the Salesorder data for export process. The process starts with the **Router** which is **getExportSalesOrder** which pass to the **Salesorderrouter** which pass to the controller file **controller.getExportSalesOrder()** method from there it takes the request to the service file which is **service.getExportSalesOrder()** method and from there it goes to the DAO file in the **dao.getExportSalesOrder()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the data from the database.
  <br/>
  <br/>
**Get Request of Url (api/SalesOrder/get/:OrderID)**<br/>
  Gets the specific SalesOrder data. The process starts with the **Router** which is **get/:OrderId/** which pass the to the **Salesorderrouter** which then goes to the controller file **controller.getSalesOrderById()** method which gets the request value and passes to the service file which is **service.getSalesOrderById()** method and from there it goes to the DAO file in the **dao.getSalesOrderById()** and in the DAO we point the model file of the **SalesOrder.js** file and find that requested orderid from the database.



## SalesOrder Organization Sequence Diagram
![OrganizationFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ORGANIZATION).jpg?raw=true"OrganizationFlow")

## Salesorder By Organization Backend

**Get Request of Url(api/SalesOrder/getStatusNameCountByCode/:code)** <br/>
 Gets all the status count of the Salesorder based on the **CompanyCode** from the backend.<br/>The process starts with **Salesorderrouter** which points to the controller file **controller.getSalesOrderByCompanyCode()** method where it takes the request and passes it to the service file of **service.getSalesOrderByCompanyCode()** and from service goes to the DAO file in **dao.getSalesOrderByCompanyCode()** and in the DAO file we use the **model** of salesorder from **SalesOrder.js** file and get the values from the database.
  <br/>
  <br/>
  **Post Request of Url (api/SalesOrder/Org/getall)** <br/>
    Get the SalesOrder data to the UI as per the pagesize and pagenumber based on the **CompanyCode** value from the request body. The process starts with the **Salesorderrouter** which points to the controller file **controller.getSalesOrderByCompanyCode()** method from there it takes the request data pass it to the service file which is **service.getSalesOrderByCompanyCode()** method from there it goes to the DAO file in the **dao.getSalesOrderByCompanyCode()** and from the DAO we point the model file of **SalesOrder.js** file and get the values from the database.
   <br/>
   <br/>
  **Get Request of Url (api/SalesOrder/getSalesOrderFilterValueByCode/:code)** <br/>
    Get the SalesOder filter values of **Location,Tickets,Status,Style** field based on the **CompanyCode**. The process starts with the **Router** which is **getSalesOrderFilterValueByCode/:code**  which goes the **Salesorderrouter** which points to the controller file **controller.getSalesOrderFilterValueByCode()** method from there it take the request and pass it to the service file which is **service.getSalesOrderFilterValueByCode()** method and form there it goes to the DAO file in the **dao.getSalesOrderFilterValueByCode()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database.
    <br/>
    <br/>
  **Post Request of Url (api/SalesOrder/Org/getSalesOrderByStatusName)**<br/>
    Get the List of Orders based on the **CompanyCode** according the status selected. The process starts with the **Router** which is **Org/getSalesOrderByStatusName** which pass to the **Salesorderrouter** which points to the controller file **controller.getSalesOrderByStatusNameCompanyCode()** method from there it take the request and pass it to the service file which is **service.getSalesOrderByStatusNameCompanyCode()** method and from there it goes to the DAO file in the **dao.getSalesOrderByStatusNameCompanyCode()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database.
    <br/>
    <br/>
   **Post Request of Url (api/SalesOrder/getSalesOrderFilterValueDataByCode/:code)**<br/>
        Get the Order Data based on the **CompanyCode** for the other filter values based upon the selected filter option. The process starts with **Router** which is **getSalesOrderFilterValueDataByCode/:code** which pass to the **Salesorderrouter** which points to the controller file **controller.getSalesOrderFilterValueDataByCode** method from there it takes the request and pass it to the service file which is **service.getSalesOrderFilterValueDataByCode** method and from there it goes to the DAO file in the **dao.getSalesOrderFilterValueDataByCode** and in the DAO file we point the model file of the **SalesOrder.js** file and get the values from the database. 
    <br/>
    <br/>
**Post Request of Url (api/SalesOrder/getExportSalesOrderByCode)**<br/>
  Get the Salesorder data for export process based on the **CompanyCode**. The process starts with the **Router** which is **getExportSalesOrderByCode** which pass to the **Salesorderrouter** which pass to the controller file **controller.getExportSalesOrderByCode()** method from there it takes the request to the service file which is **service.getExportSalesOrderByCode()** method and from there it goes to the DAO file in the **dao.getExportSalesOrderByCode()** and in the DAO file we point the model file of the **SalesOrder.js** file and get the data from the database.
  <br/>
  <br/>
**Get Request of Url (api/SalesOrder/get/:OrderID)**<br/>
  Gets the specific SalesOrder data. The process starts with the **Router** which is **get/:OrderId/** which pass the to the **Salesorderrouter** which then goes to the controller file **controller.getSalesOrderById()** method which gets the request value and passes to the service file which is **service.getSalesOrderById()** method and from there it goes to the DAO file in the **dao.getSalesOrderById()** and in the DAO we point the model file of the **SalesOrder.js** file and find that requested orderid from the database.
