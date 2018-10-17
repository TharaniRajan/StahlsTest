![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. [Overview](#overview)
1. [System Architecture](#system-architecture)<br/>
2.1 [High Level Components](#high-level-components)<br/>
    2.2 [Technical Componets](#technical-components)<br/>
    2.3 [sub section 2.3](#salesorder-details-erd-diagram)<br/>
1. [Tickets](#ticket-erd-diagram)
1. [SalesOrder](SalesOrder.md)
1. [Inventory](Inventory.md)
1. [Purchase Order](Purchaseorder.md)
1. [Shipments](Shipments.md)<br/>
1. [Deployment](Deployment.md)<br/>
1. [Invoice](Invoices.md)<br/>
1. [Organization](Organization.md)<br/>
1. [User](User.md)<br/>
 1. Section 
    6. User Interface Design<br/>
    6.1 User Interface Design Overview<br/>
    6.2 User Interface Navigation Hierarchy<br/>
    6.3 User Function Categories(or Use Cases)<br/>
 1. Section
    7. Other Interfaces<br/>
    7.x Interface X
 1. Section 
    8. Other Design Feature<br/>
 1. Section
    9. Requirements Traceability Matrix<br/>
 1. Section
    10. References<br/>
 1. Section
    11. Appendices<br/>


### Overview
line 1 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
line 2 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
line 3 TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
line 4 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
line 5 dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

### System Architecture
jaskdhfljkasdhfjklahsdfjkhasjkldfhajklsdfhjklasdhfjklahsdfjhasdjkfhajsdkfhlajksdhfljkashdfjahsdlfjasdh
ashdfajksdhfjkasdhfjklahsdfjkhasdjklfhajlksdfhajsdfhajlksdhflajsdhfljashdfljkahsdlfjkhalsdfjkhaljdfhlak

### High Level Components
The Stahls application is composed of three main components depicted by the diagram below.
The interaction/intgeration between the PolyPM system and the Stahs Portal application is via an MS Sql PaaS database.
An advanatge of this method of integration is that it allows for other Stahls system that which to display information on the portal to do so by utilizing the same PaaS DB

![HighLevelComps](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/high-level-components.jpg?raw=true"HighLevelComps")


### Technical Components
The Stahls application utilizes the components below for development, build/deploy and runtime.<br/>
- Development Language<br/>
    - Javscript
- Frameworks
    -  AngularJS version 5
    -  NodeJs version 8?
    

### Ticket ERD Diagram
![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Tickets%20ER%20Diagram.jpg?raw=true"ERD")
      

### SalesOrder Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ADMIN).jpg?raw=true"AdminFlow")

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


### SalesOrder Organization Sequence Diagram
![OrganizationFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ORGANIZATION).jpg?raw=true"OrganizationFlow")
