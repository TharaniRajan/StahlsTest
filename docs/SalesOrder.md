![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. SalesOrder<br/>
    1. SalesOrder Diagrams<br/>
    1.1 [Salesorder ERD](#salesorder-erd-daigram)<br/>
    1.2 [Salesorder Item ERD](#salesorder-item-erd)<br/>
    1.3 [Salesorder Details ERD](#salesorder-details-erd)<br/>
    1.1 [Salesorder Sequence](#salesorder-sequence-diagram)<br/>
    1.1.2 [Salesorder Organization Sequence](#salesorder-organization-sequence-diagram)<br/>
  
   <br/>
   
## SalesOrder ERD Daigram

![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/SalesOrder%20ER%20Diagram.jpg?raw=true"ERD")

## Salesorder Item ERD Diagram

![ERD1](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/SalesOrderItems%20ER%20Diagaram.jpg?raw=true"ERD1")

## Salesorder Details ERD Diagram

![ERD2](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/SalesOrderDetails%20ER%20Diagram.jpg?raw=true"ERD2")

## SalesOrder Sequence Diagram
The list of files involved in Admin Sequence Diagram
<br/>
### Controller
1. getcountbystatusname <br/>
1. getSalesOrderByCompanyCode <br/>
1. getSalesOrderfiltervalue <br/>
1. getSalesOrderFilterValueData <br/>
1. getExportSalesOrder <br/>
1. getSalesOrderById <br/>

### Service
1. getcountbystatusname <br/>
1. getSalesOrderByCompanyCode <br/>
1. getSalesOrderfiltervalue <br/>
1. getSalesOrderFilterValueData <br/>
1. getExportSalesOrder <br/>
1. getSalesOrderById <br/>

### DAO
1. getcountbystatusname <br/>
1. getAllSalesOrder <br/>
1. getSalesOrderfiltervalue <br/>
1. getSalesOrderFilterValueData <br/>
1. getExportSalesOrder <br/>
1. getSalesOrderById <br/>

![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ADMIN).jpg?raw=true"AdminFlow")
<br/>


## SalesOrder Organization Sequence Diagram
The list of files involved in Organization based Sequence Diagram
<br/>
### Controller
1. getSalesOrderByCompanyCode <br/>
1. getSalesOrderByStatusNameCompanyCode <br/>
1. getSalesOrderFilterValueByCode <br/>
1. getSalesOrderFilterValueDataByCode <br/>
1. getExportSalesOrderByCode <br/>
1. getSalesOrderById <br/>

### Service
1. getSalesOrderByCompanyCode <br/>
1. getSalesOrderByStatusNameCompanyCode <br/>
1. getSalesOrderFilterValueByCode <br/>
1. getSalesOrderFilterValueDataByCode <br/>
1. getExportSalesOrderByCode <br/>
1. getSalesOrderById <br/>

### DAO
1. getSalesOrderByCompanyCode <br/>
1. getSalesOrderByStatusNameCompanyCode <br/>
1. getSalesOrderFilterValueByCode <br/>
1. getSalesOrderFilterValueDataByCode <br/>
1. getExportSalesOrderByCode <br/>
1. getSalesOrderById <br/>

![OrganizationFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/salesOrderSequenceDiagram(ORGANIZATION).jpg?raw=true"OrganizationFlow")
