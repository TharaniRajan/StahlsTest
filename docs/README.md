![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Table of Figures 
1. Stake Holders 
1. Glossary
1. [Ticket](#ticket-erd-diagram)
1. Revision History 
  1. SalesOrder<br/>
    1.1 [Salesorder Sequence](#salesorder-sequence-diagram)<br/>
    1.2 [Salesorder](#salesorder-backend)
  1. Section 1. Overview<br/>
    1.1 Purpose<br/>
    1.2 Scope <br/>
  1. Section 
    2. System Architecture<br/>
    2.1 Architectural components<br/>
  1. Section 
    3. Data Dictionary<br/>
  1. Section 
    5. Data Design<br/>
    5.1 Persistent/Static Data<br/> 
    5.2 Transient/Dynamic Data<br/> 
    5.3 External Interface Data<br/> 
    5.4 Transformation of Data<br/>
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


### Ticket ERD Diagram
![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Tickets%20ER%20Diagram.jpg?raw=true"ERD")
      

### SalesOrder Sequence Diagram
![Test](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ADMIN).jpg?raw=true"Test")

## SalesOrder Backend 

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
