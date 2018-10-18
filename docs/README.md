![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. [Overview](#overview)
1. [System Architecture](#system-architecture)<br/>
2.1 [High Level Components](#high-level-components)<br/>
    2.2 [Technical Componets](#technical-components)<br/>
    2.3 [Application Components](#application-components)<br/>
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
- Libraries - front end
    - bootstrap - versions
- Libraries - back end
    -  Sequalize what version?
    -  we used a security
    -  have the guys add the rest
-  Testing
    -  Jmeter version?
    -  Jasmine
    -  Karma
-  Build and Deployment
    -  Jenkins

### Application Components
The Stahl's portal consists of an AngularJS UI and and three distict NodeJs applications whose names and purpose are explained below.

#### Node application one - StahlsPortal
The StalhsPortal application is responsible for handling all of functionality of the Portal project _**except**_ the landing page that displays the graphs/analytics for the system

#### Node application  two - AnalyticsService
The Analytics application's purpose is to handle the landing page of the application and sepearte out the procesing of the analytics function. The reason for having a seperate application to only handle analytics is so that this function can be escald separtely as needed. Furtheremore, analytics in general, can be complex and changing, this seperation allows for on portion of the overall sysem to change without affecting the base functionality.

#### Node application  three - SynchService
The SynchService is responsible for updating the table/data base used by the StalhsPortal, and AnalyticsService. 


