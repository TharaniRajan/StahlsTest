![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Invoices<br/>
    1. Invoices Diagrams<br/>
    1.1 [Invoices Sequence](#invoices-sequence-diagram)<br/>
    1.1.2 [Invoices Organization Sequence](#invoices-organization-sequence-diagram)<br/>
  1.2 [Invoices Admin_Flow](#invoices-backend)<br/>
  1.3 [Invoices Organization_Flow](#invoices-by-organization-backend)<br/>
   <br/>

## Invoices Sequence Diagram
![Admin](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/InvoiceSequenceDiagram.jpg?raw=true"Admin")

## Invoices Backend

**Get Request of Url(api/Invoices/getall)** <br/>
    Get all the Invoice records. The process starts with the **Router** which is **getall** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getallInvoices** method from there we  take the request and pass it to the service file which is **service.getallInvoices** method from there it is goes to the DAO file which is **dao.getallInvoices** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/Invoices/getInvoicesFilterValue)** <br/>
    Get all the data to the filters in the Invoice screen which is Item and Status. The process starts with the **Router** which is **getInvoicesFilterValue** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesFilterValue** method from there we  take the request and pass it to the service file which is **service.getInvoicesFilterValue** method from there it is goes to the DAO file which is **dao.getInvoicesFilterValue** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
  **Get Request of Url (api/Invoices/getInvoicesFilterValueData)** <br/>
    Get the data to the other filter in the Invoice screen based on the selected filter option. The process starts with the **Router** which is **getInvoicesFilterValueData** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesFilterValueData** method from there we  take the request and pass it to the service file which is **service.getInvoicesFilterValueData** method from there it is goes to the DAO file which is **dao.getInvoicesFilterValueData** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
  **Get Request of Url (api/Invoices/get/:uuid)** <br/>
    Get the Invoicedetails data based on the Invoice id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesById** method from there we  take the request and pass it to the service file which is **service.getInvoicesById** method from there it is goes to the DAO file which is **dao.getInvoicesById** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
   
## Invoices Organization Sequence Diagram
![Organization](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Invoice%20Organization_Flow.jpg?raw=true"Organization")

## Invoices By Organization Backend

**Get Request of Url(api/Invoices/org/getall)** <br/>
    Get all the Invoice records based on the **Companycode**. The process starts with the **Router** which is **org/getall** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getallInvoicesByOrg** method from there we  take the request and pass it to the service file which is **service.getallInvoicesByOrg** method from there it is goes to the DAO file which is **dao.getallInvoicesByOrg** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
  <br/>
  <br/>
  **Get Request of Url (api/Invoices/getInvoicesFilterValueByCode/:code)** <br/>
    Get all the data to the filters in the Invoice screen which is Item and Status based on the **Companycode**. The process starts with the **Router** which is **getInvoicesFilterValueByCode/:code** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesFilterValue** method from there we  take the request and pass it to the service file which is **service.getInvoicesFilterValue** method from there it is goes to the DAO file which is **dao.getInvoicesFilterValue** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
  **Get Request of Url (api/Invoices/getInvoicesFilterValueDataByCode/:code)** <br/>
    Get the data for the other filters in the Invoice screen based on the selected filter option. The process starts with the **Router** which is **getInvoicesFilterValueDataByCode/:code** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesFilterValueDataByCode** method from there we  take the request and pass it to the service file which is **service.getInvoicesFilterValueDataByCode** method from there it is goes to the DAO file which is **dao.getInvoicesFilterValueDataByCode** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Get Request of Url (api/Invoices/get/:uuid)** <br/>
    et the Invoicedetails data based on the Invoice id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **InvoicesRouter** file and from ther we point it to the controller file **controller.getInvoicesById** method from there we  take the request and pass it to the service file which is **service.getInvoicesById** method from there it is goes to the DAO file which is **dao.getInvoicesById** and in DAO file we connect with the **Invoices.js** file and get the data from the database and pass it to the UI.
   <br/>
   <br/>
