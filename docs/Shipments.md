![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Shipments<br/>
    1. Shipments Diagrams<br/>
    1.1 [Shipments Sequence](#shipments-sequence-diagram)<br/>
    1.1.2 [Shipments Organization Sequence](#shipments-organization-sequence-diagram)<br/>
  1.2 [Shipments Admin_Flow](#shipments-backend)<br/>
  1.3 [Shipments Organization_Flow](#shipments-by-organization-backend)
   <br/>
   
## Shipments Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/ShipmentSequenceDiagram.jpg?raw=true"AdminFlow")
<br/>

## Shipments Backend 
  **Post Request of Url (api/Shipments/getall)** <br/>
    Get the Shipment data to the UI as per the pagesize and pagenumber value from the request body. The process starts with the **ShipmentsRouter** which points to the controller file **controller.getallShipments()** method from there it takes the request data pass it to the service file which is **service.getallShipments()** method from there it goes to the DAO file in the **dao.getallShipments()** and from the DAO we point the model file of **Shipments.js** file and get the values from the database.
   <br/>
    <br/>
  **Get Request of Url (api/Shipments/getShipmentFilterValue)** <br/>
    Get the Shipments filter values for the **Ponumber** field. The process starts with the **Router** which is **getShipmentFilterValue**  which goes the **ShipmentsRouter** which points to the controller file **controller.getShipmentFilterValue()** method from there it take the request and pass it to the service file which is **service.getShipmentFilterValue()** method and form there it goes to the DAO file in the **dao.getShipmentFilterValue()** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database.
    <br/>
    <br/>
   **Post Request of Url (api/Shipments/getPonumberByDate)**<br/>
        Get the Ponumber vaues for the filter based on the startdate. The process starts with **Router** which is **getPonumberByDate** which pass to the **ShipmentsRouter** which points to the controller file **controller.getPonumberByDate** method from there it takes the request and pass it to the service file which is **service.getPonumberByDate** method and from there it goes to the DAO file in the **dao.getPonumberByDate** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database. 
    <br/>
    <br/>
  **Post Request of Url (api/Shipments/getShipmentByDate)**<br/>
    Gets the list of data between the selected date range for export process. The process starts with the **Router** which is **getShipmentByDate** which pass to the **ShipmentsRouter** which points to the controller file **controller.getShipmentByDate()** method from there it take the request and pass it to the service file which is **service.getShipmentByDate()** method and from there it goes to the DAO file in the **dao.getShipmentByDate()** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database.
    <br/>
    <br/>
**Get Request of Url (api/Shipments/getpackeditem/:shipmentId)**<br/>
  Gets the Packeditem records for the sepcific shipment id selected. The process starts with the **Router** which is **getpackeditem/:shipmentId/** which pass the to the **ShipmentsRouter** which then goes to the controller file **controller.getPackedItemsById()** method which gets the request value and passes to the service file which is **service.getPackedItemsById()** method and from there it goes to the DAO file in the **dao.getPackedItemsById()** and in the DAO we point the model file of the **Shipments.js** file and find that requested orderid from the database.


## Shipments Organization Sequence Diagram
![OrganizationFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/ShipmentSequenceDiagram_Organization_Flow.jpg?raw=true"OrganizationFlow")
<br/>

## Shipments By Organization Backend
  **Post Request of Url (api/Shipments/Org/getall)** <br/>
    Get the Shipment data to the UI as per the pagesize and pagenumber based on the **Companycode** value from the request body. The process starts with the **ShipmentsRouter** which points to the controller file **controller.getallShipmentsOrganisation()** method from there it takes the request data pass it to the service file which is **service.getallShipmentsOrganisation()** method from there it goes to the DAO file in the **dao.getallShipmentsOrganisation()** and from the DAO we point the model file of **Shipments.js** file and get the values from the database.
   <br/>
   <br/>
  **Get Request of Url (api/Shipments/getShipmentFilterByCompanycode/:code)** <br/>
    Get the Shipments filter values for the **Ponumber** field based on the **Companycode**. The process starts with the **Router** which is **getShipmentFilterByCompanycode/:code**  which goes the **ShipmentsRouter** which points to the controller file **controller.getShipmentFilterByCompanycode()** method from there it take the request and pass it to the service file which is **service.getShipmentFilterByCompanycode()** method and form there it goes to the DAO file in the **dao.getShipmentFilterByCompanycode()** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database.
    <br/>
    <br/>
   **Post Request of Url (api/Shipments/getPonumberByDate)**<br/>
        Get the Ponumber vaues for the filter based on the startdate. The process starts with **Router** which is **getPonumberByDate** which pass to the **ShipmentsRouter** which points to the controller file **controller.getPonumberByDate** method from there it takes the request and pass it to the service file which is **service.getPonumberByDate** method and from there it goes to the DAO file in the **dao.getPonumberByDate** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database. 
    <br/>
    <br/>
  **Post Request of Url (api/Shipments/getShipmentByDateCode)**<br/>
    Gets the list of data between the selected date range for export process based on the **Companycode**. The process starts with the **Router** which is **getShipmentByDateCode** which pass to the **ShipmentsRouter** which points to the controller file **controller.getShipmentByDateCode()** method from there it take the request and pass it to the service file which is **service.getShipmentByDateCode()** method and from there it goes to the DAO file in the **dao.getShipmentByDateCode()** and in the DAO file we point the model file of the **Shipments.js** file and get the values from the database.
    <br/>
    <br/>
**Get Request of Url (api/Shipments/getpackeditem/:shipmentId)**<br/>
  Gets the Packeditem records for the sepcific shipment id selected. The process starts with the **Router** which is **getpackeditem/:shipmentId/** which pass the to the **ShipmentsRouter** which then goes to the controller file **controller.getPackedItemsById()** method which gets the request value and passes to the service file which is **service.getPackedItemsById()** method and from there it goes to the DAO file in the **dao.getPackedItemsById()** and in the DAO we point the model file of the **Shipments.js** file and find that requested orderid from the database.
