![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Inventory<br/>
    1. Inventory Diagrams<br/>
    1.1 [Inventory Sequence](#inventory-sequence-diagram)<br/>
    1.1.2 [Inventory Qrganization Sequence](#inventory-organization-sequence-diagram)<br/>
  1.2 [Inventory Admin_Flow](#inventory-admin_flow)<br/>
  1.3 [Inventory Organization_Flow](#inventory-organization_flow)<br/>
   <br/>

## Inventory Sequence Diagram
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/InventorySequenceDiagram(Admin_Flow).jpg?raw=true"AdminFlow")

## Inventory Admin_Flow
**Post Request of Url(api/Inventory/getallactiveinventory)** <br/>
    Get all the Inventory records which are in Active status. The process starts with the **Router** which is **getallactiveinventory** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getinventorybyActiveStatus** method from there we  take the request and pass it to the service file which is **service.getinventorybyActiveStatus** method from there it is goes to the DAO file which is **dao.getinventorybyActiveStatus** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/Inventory/getInventoryFilterValue)** <br/>
    Get all the data to the filters in the Inventory screen which is Code,Style,Color,Size. The process starts with the **Router** which is **getInventoryFilterValue** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getInventryFilterValue** method from there we  take the request and pass it to the service file which is **service.getInventryFilterValue** method from there it is goes to the DAO file which is **dao.getInventryFilterValue** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
   <br/>
    <br/>
  **Get Request of Url (api/Inventory/filterinventory)** <br/>
       Get the values of the other filter options based on the selected filter option. The process starts with the **Router** which is **filterinventory** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getselectedfiltervalue** method from there we  take the request and pass it to the service file which is **service.getselectedfiltervalue** method from there it is goes to the DAO file which is **dao.getselectedfiltervalue** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Post Request of Url (api/InventoryItems/get/:uuid)**<br/>
        Get the Inventoryitems detials for the selected Inventory id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getinventoryitembyid** method from there we  take the request and pass it to the service file which is **service.getinventoryitembyid** method from there it is goes to the DAO file which is **dao.getinventoryitembyid** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
   

## Inventory Organization Sequence Diagram

![Organization](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/InventorySequenceDiagram(Organization_Flow).jpg?raw=true"Organization")


## Inventory Organization_Flow

**Post Request of Url(api/Inventory/getinventorybycompanycode)** <br/>
    Get all the Inventory records which are in Active status and based on the **CompanyCode**. The process starts with the **Router** which is **getinventorybycompanycode** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getinventorybycompanycode** method from there we  take the request and pass it to the service file which is **service.getinventorybycompanycode** method from there it is goes to the DAO file which is **dao.getinventorybycompanycode** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/Inventory/getInventoryFilterValueByCode/:code)** <br/>
    Get all the data to the filters in the Inventory screen which is Code,Style,Color,Size based on the **Companycode**. The process starts with the **Router** which is **getInventoryFilterValueByCode/:code** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getInventoryFilterValueByCompanyCode** method from there we  take the request and pass it to the service file which is **service.getInventoryFilterValueByCompanyCode** method from there it is goes to the DAO file which is **dao.getInventoryFilterValueByCompanyCode** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
  **Get Request of Url (api/Inventory/Filtervaluebycompanycode/:code)** <br/>
       Get the values of the other filter options based on the selected filter option. The process starts with the **Router** which is **Filtervaluebycompanycode/:code** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getselectedfiltervalue** method from there we  take the request and pass it to the service file which is **service.getselectedfiltervalue** method from there it is goes to the DAO file which is **dao.getselectedfiltervalue** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Post Request of Url (api/InventoryItems/get/:uuid)**<br/>
        Get the Inventoryitems detials for the selected Inventory id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **InventoryRouter** file and from ther we point it to the controller file **controller.getinventoryitembyid** method from there we  take the request and pass it to the service file which is **service.getinventoryitembyid** method from there it is goes to the DAO file which is **dao.getinventoryitembyid** and in DAO file we connect with the **Inventory.js** file and get the data from the database and pass it to the UI.
