![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Inventory<br/>
    1. Inventory Diagrams<br/>
    1.1 [Inventory Items ERD](#inventory-item-erd-diagram)<br/>
    1.2 [Inventroy ERD](#inventory-erd-diagram)<br/>
    1.1 [Inventory Sequence](#inventory-sequence-diagram)<br/>
    1.1.2 [Inventory Organization Sequence](#inventory-organization-sequence-diagram)<br/>
   <br/>

## Inventory Item ERD Diagram 

![ERD1](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Finished%20Goods%20Adjustment%20ER%20Diagram.jpg?raw=true"ERD1")

## Inventory ERD Diagram 

![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Finished%20Goods%20ER%20Diagram.jpg?raw=true"ERD")

## Inventory Sequence Diagram
The list files involed in the Sequence Diagram are

### Controller<br/>
1. getinventorybyActiveStatus <br/>
1. getInventryFilterValue <br/>
1. getselectedfiltervalue <br/>
1. getinventoryitembyid <br/>

### Service<br/>
1. getinventorybyActiveStatus<br/>
1. getInventryFilterValue <br/>
1. getselectedfiltervalue <br/>
1. getinventoryitembyid <br/>

### DAO<br/>
1. getinventorybyActiveStatus <br/>
1. getInventryFilterValue <br/>
1. getselectedfiltervalue <br/>
1. getinventoryitembyid <br/>

![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/InventorySequenceDiagram(Admin_Flow)%20(1).jpg?raw=true"AdminFlow")

## Inventory Organization Sequence Diagram

The list files involed in the Sequence Diagram are

### Controller<br/>
1. getinventorybycompanycode <br/>
1. getselectedfiltervaluebycode <br/>
1. getInventoryFilterValueByCompanyCode <br/>
1. getinventoryitembyid <br/>

### Service<br/>
1. getinventorybycompanycode <br/>
1. getselectedfiltervaluebycode <br/>
1. getInventoryFilterValueByCompanyCode <br/>
1. getinventoryitembyid <br/>

### DAO<br/>
1. getinventorybycompanycode <br/>
1. getselectedfiltervaluebycode <br/>
1. getInventoryFilterValueByCompanyCode <br/>
1. getinventoryitembyid <br/>

![Organization](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/InventorySequenceDiagram(Organization_Flow).jpg?raw=true"Organization")
