![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. Ticket<br/>
    1. Ticket Diagrams<br/>
    1.1 [Ticket ERD](#ticket-item-erd-diagram)<br/>
    1.2 [TicketComments ERD](#ticketcomments-erd-diagram)<br/>
    1.3 [Ticket History ERD](#Ticket-history-erd-diagram)<br/>
    1.4 [Ticket Attachment ERD](#ticket-attachment-erd-diagram)<br/>
    1.1 [Ticket Sequence](#ticket-sequence-diagram)<br/>
    1.1.2 [Ticket Organization Sequence](#ticket-organization-sequence-diagram)<br/>
   <br/>

## Ticket ERD Diagram <br/>

![ERD](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Tickets%20ER%20Diagram.jpg?raw=true"ERD")

## TicketComments ERD Diagram <br/>

![ERD1](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/TicketComments%20ERDiagram.jpg?raw=true"ERD1")

## Ticket History ERD Diagram <br/>

![ERD2](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/TicketHistory%20ER%20Diagram.jpg?raw=true"ERD2")

## Ticket Attachment ERD Diagram <br/>

![ERD3](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/TicketAttachments%20ER%20Diagram.jpg?raw=true"ERD3")

## Ticket Sequence Diagram<br/>
The list of files involved in the ticket sequence are

## Ticket<br/>

  ### Controller<br/>
  1. getall_ticket<br/>
  1. getFilterValue<br/>
  1. searchDetails<br/>
  1. create_Ticket<br/>
  1. getticketById<br/>
  1. update_ticket<br/>
  1. Removeassigneduser<br/>

  ### Service<br/>
  1. getall_ticket<br/>
  1. getFilterValue<br/>
  1. searchDetails<br/>
  1. create_Ticket<br/>
  1. getticketById<br/>
  1. update_ticket<br/>
  1. Removeassigneduser<br/>

  ### DAO<br/>
  1. getall_ticket<br/>
  1. getFilterValue<br/>
  1. searchDetails<br/>
  1. create_Ticket<br/>
  1. getticketById<br/>
  1. update_ticket<br/>
  1. Removeassigneduser<br/>

## Organization<br/>

  ### Controller
  1. getallOrganization<br/>
  
  ### Service
  1. getallOrganization<br/>
  
  ### DAO
  1. getallOrganization<br/>
  
## Salesorder<br/>

  ### Controller
  1. getAllSalesOrders<br/>
  
  ### Service
  1. getAllSalesOrders<br/>
  
  ### DAO
  1. getAllSalesOrders<br/>
  
## User <br/>

  ### Controller
   1. getalluser<br/>
   
  ### Service
   1. getalluser<br/>
   
  ### DAO
   1.getalluser<br/>

## Ticket Comments<br/>

  ### Controller
   1. getall_ticketcomments<br/>
   1. create_Ticketcomments<br/>
   
  ### Service
   1. getall_ticketcomments<br/>
   1. create_Ticketcomments<br/>
   
  ### DAO
   1. getall_ticketcomments<br/>
   1. create_Ticketcomments<br/>
   
## Ticket History<br/>

  ### Controller
   1. getall_Tickethistory<br/>
   1. update_Tickethistory<br/>
   
  ### Service
   1. getall_Tickethistory<br/>
   1. update_Tickethistory<br/>
   
  ### DAO
   1. getall_Tickethistory<br/>
   1. update_Tickethistory<br/>
   
## Ticket Attachment<br/>

  ### FileUpload<br/>
   1.uploadfile<br/>
   
  ### Controller
   1. saveFileUrl<br/>
   1. getuploadfilebyid<br/>
   1. deleteuploadfile<br/>
   
  ### Service
   1. saveFileUrl<br/>
   1. getuploadfilebyid<br/>
   1. deleteuploadfile<br/>
   
  ### DAO
   1. saveFileUrl<br/>
   1. getuploadfilebyid<br/>
   1. deleteuploadfile<br/>
   
 ## AssignedUserTicket<br/>

  ### Controller
   1. createAssignedUserTickets<br/>
   
  ### Service
   1. createAssignedUserTickets<br/>
   
  ### DAO
   1. createAssignedUserTickets<br/>
  
## CloseReason<br/>

  ### Controller
   1. reason<br/>
   
  ### Service
   1. getreason<br/>
   
  ### DAO
   1. reason<br/>

![Admin](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/TicketSequenceDiagram(ADMIN).jpg?raw=true"Admin")


## Ticket Organization Sequence Diagram<br/>
The list of files involved in the ticket sequence are
## Ticket

  ### Controller

  ### Service

  ### DAO
![Organization](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/TicketSequenceDiagram(ORGANIZATION).jpg?raw=true"Organization")
