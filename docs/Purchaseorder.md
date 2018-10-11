![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Purchaseorder<br/>
    1. Purchaseorder Diagrams<br/>
    1.1 [Purchaseorder Sequence](#purchaseorder-sequence-diagram)<br/>
    1.1.2 [Purchaseorder Organization Sequence](#purchaseorder-organization-sequence-diagram)<br/>
  1.2 [Purchaseorder Admin_Flow](#purchaseorder-backend)<br/>
  1.3 [Purchaseorder Organization_Flow](#purchaseorder-by-organization-backend)<br/>
   <br/>

## Purchaseorder Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/PurchaseOrderSequenceDaigram.jpg?raw=true"AdminFlow")

## Purchaseorder Backend
**Get Request of Url(api/PurchaseOrders/getall)** <br/>
    Get all the Purchaseorder records. The process starts with the **Router** which is **getall** and from the router it goes to the **PurchaseOrdersRouter** file and from ther we point it to the controller file **controller.getallpurchaseorders** method from there we  take the request and pass it to the service file which is **service.getallpurchaseorders** method from there it is goes to the DAO file which is **dao.getallpurchaseorders** and in DAO file we connect with the **PurchaseOrder.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/PurchaseOrders/get/:uuid)** <br/>
    Get the VendorReceive data based on the Purchaseorder id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **PurchaseOrdersRouter** file and from ther we point it to the controller file **controller.getpurchaseorderbyid** method from there we  take the request and pass it to the service file which is **service.getpurchaseorderbyid** method from there it is goes to the DAO file which is **dao.getpurchaseorderbyid** and in DAO file we connect with the **PurchaseOrder.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
  

## Purchaseorder Organization Sequence Diagram

![Organization](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/PurchaseOrderSequenceDiagram_Organization_Flow.jpg?raw=true"Organization")


## Purchaseorder By Organization Backend

**Post Request of Url(api/PurchaseOrders/org/getall/:companyCode)** <br/>
    Get all the Purchaseorder records which based on the **CompanyCode**. The process starts with the **Router** which is **org/getall/:companyCode** and from the router it goes to the **PurchaseOrdersRouter** file and from ther we point it to the controller file **controller.getAllPurchaseOrderByOrg** method from there we  take the request and pass it to the service file which is **service.getAllPurchaseOrderByOrg** method from there it is goes to the DAO file which is **dao.getAllPurchaseOrderByOrg** and in DAO file we connect with the **PurchaseOrder.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/PurchaseOrders/get/:uuid)** <br/>
     Get the VendorReceive data based on the Purchaseorder id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **PurchaseOrdersRouter** file and from ther we point it to the controller file **controller.getpurchaseorderbyid** method from there we  take the request and pass it to the service file which is **service.getpurchaseorderbyid** method from there it is goes to the DAO file which is **dao.getpurchaseorderbyid** and in DAO file we connect with the **PurchaseOrder.js** file and get the data from the database and pass it to the UI.
   
  

