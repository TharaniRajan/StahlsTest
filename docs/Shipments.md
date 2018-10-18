![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Shipments<br/>
    1. Shipments Diagrams<br/>
    1.1 [ShipmentItem ERD Diagram](#shipmentitem-erd-diagram)</br>
    1.1 [PackedItem ERD Diagram](#packeditem-erd-diagram)<br/>
    1.1 [Shipment ERD Diagram](#shipments-erd-diagram)<br/>
    1.1 [Shipments Sequence](#shipments-sequence-diagram)<br/>
    1.1.2 [Shipments Organization Sequence](#shipments-organization-sequence-diagram)<br/>
   <br/>
   
   
## Shipments ERD Diagram

![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Shipments%20ER%20Diagaram.jpg?raw=true"ERD")

## ShipmentItem ERD Diagram

![ERD1](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/ShipmentItems%20ER%20Diagram.jpg?raw=true"ERD1")

## PackedItem ERD Diagram

![ERD2](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/PackedItems%20ER%20Diagram.jpg?raw=true"ERD2")

  
## Shipments Sequence Diagram
The list of file involved in the Shipments are 

### Controller<br/>
 1. getallShipments<br/>
 1. getShipmentFilterValue<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDate<br/>
 1. getPackedItemsById<br/>
 
### Service<br/>
 1. getallShipments<br/>
 1. getShipmentFilterValue<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDate<br/>
 1. getPackedItemsById<br/>

### DAO<br/>
 1. getallShipments<br/>
 1. getShipmentFilterValue<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDate<br/>
 1. getPackedItemsById<br/>

 
![AdminFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/ShipmentSequenceDiagram.jpg?raw=true"AdminFlow")
<br/>

## Shipments Organization Sequence Diagram
The list of file involved for Shipments based on organization are 

### Controller<br/>
 1. getallShipmentsOrganisation<br/>
 1. getShipmentFilterByCompanycode<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDateCode<br/>
 1. getPackedItemsById<br/>

### Service<br/>
 1. getallShipmentsOrganisation<br/>
 1. getShipmentFilterByCompanycode<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDateCode<br/>
 1. getPackedItemsById<br/>

### DAO<br/>
 1. getallShipmentsOrganisation<br/>
 1. getShipmentFilterByCompanycode<br/>
 1. getPonumberByDate<br/>
 1. getShipmentByDateCode<br/>
 1. getPackedItemsById<br/>
 
![OrganizationFlow](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/ShipmentSequenceDiagram_Organization_Flow.jpg?raw=true"OrganizationFlow")
<br/>

 
