![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. [Overview](#overview)
1. [System Architecture](#system-architecture)<br/>
2.1 [High Level Components](#high-level-components)<br/>
    2.2 [Technical Componets](#technical-components)<br/>
    2.3 [Application Components](#application-components)<br/>
1. Application Functions - Technical Description<br/>
3.1 [Tickets](Tickets.md)<br/>
3.2 [SalesOrder](SalesOrder.md)<br/>
3.3 [Inventory](Inventory.md)<br/>
3.4 [Purchase Order](Purchaseorder.md)<br/>
3.5 [Shipments](Shipments.md)<br/>
3.7 [Invoice](Invoices.md)<br/>
3.8 [Organization](Organization.md)<br/>
3.9 [Users, Authentication and Authorization](User.md)<br/>
3.10 [Settings](Settings.md)<br/>
1. [Deployment](Deployment.md)<br/>

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
The purpose of this document is to describe the architecture and high level technical specifications of the Stahls Portal system. 

The business objective of the Stahls Portal system is to provide clients of Stahls with a one stop shop, to view their inventory, orders, and enter problem tickets.

### System Architecture

### High Level Components
The Stahls application is composed of three main components depicted by the diagram below.
The interaction/integration between the PolyPM system and the Stahs Portal application is via an MS Sql PaaS database.
An advanatge of this method of integration is that it allows for other Stahls systems, that which to display information on the portal, to do so by utilizing the same PaaS DB

![HighLevelComps](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/high-level-components.jpg?raw=true"HighLevelComps")


### Technical Components
The Stahls application utilizes the components below for development, build/deploy and runtime.<br/>
- ###### Development Language
    - Javscript
- ###### Frameworks
    -  AngularJS version 5
    -  NodeJs version 8?
- ###### Libraries - front end
    - bootstrap - versions
- ###### Libraries - back end
    -  Sequalize what version?
    -  we used a security
    -  have the guys add the rest
-  ###### Testing
    -  Jmeter version?
    -  Jasmine
    -  Karma
-  ###### Build and Deployment
    -  Jenkins

### Application Components
The Stahl's portal consists of an AngularJS UI and and three distict NodeJs applications whose names and purpose are explained below.
##### NodeJs
###### application one - StahlsPortal
The StalhsPortal application is responsible for handling all of functionality of the Portal project _**except**_ the landing page that displays the graphs/analytics for the system

###### application  two - AnalyticsService
The Analytics application's purpose is to handle the landing page of the application and seperate out the procesing of the analytics function. The reason for having a seperate application, to only handle analytics, is so that this function can be scaled seperately as needed. Furtheremore, analytics in general, can be complex and changing, this seperation allows for a portion of the overall system to change without affecting the base functionality.

###### application  three - SynchService
The SynchService is responsible for updating the table/data base used by the StalhsPortal, and AnalyticsService. 

##### AngularJS
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#### Application Components Structure
##### NodeJs
At a high level, all of the NodeJs services that make up the three applications are composed of three layers who's functions are listed below.

###### Layer One - Controller
The controller layer handles the interactions with incoming requests, and can do pre-processing of the request, if needed, before handing/calling the business/service layer and passing the incoming request.

###### Layer two - Service

This is reposible for any business logic that needs to be performed by the business function and to call and aggregate any data by calling the data access layer (DAO)

###### Layer three - DAO
the data access layers function is to interact with the data base or any other future data repositories such as other services. Once the data access layer obtains the necessary informatiom it returns the information to the calling service layer.




