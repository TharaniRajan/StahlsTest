![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# Content 
1. User <br/>
  1. User Diagram <br/>
  1. [User Sequence](#user-sequence)<br/>
  1. [User Backend](#user-backend)<br/>
  
  
  # User Sequence
  
  ![Users](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/UserSequenceDiagram.jpg?raw=true"Users")

  # User Backend
  **Post Request of Url(api/User/create)** <br/>
    Creates a User for the Organization with role. The process starts with the **Router** which is **create** and from the router it goes to the **UserRouter** file and from ther we point it to the controller file **controller.createuser** method from there we  take the request and pass it to the service file which is **service.createuser** method from there it is goes to the DAO file which is **dao.createuser** and in DAO file we connect with the **Users.js** file and stores the value in the database and pass it to the UI.
 <br/>
 <br/>
  **Get Request of Url(api/User/getall)** <br/>
    Get all the User details. The process starts with the **Router** which is **getall** and from the router it goes to the **UserRouter** file and from ther we point it to the controller file **controller.getalluser** method from there we  take the request and pass it to the service file which is **service.getalluser** method from there it is goes to the DAO file which is **dao.getalluser** and in DAO file we connect with the **Users.js** file and get the data from the database and pass it to the UI.
 <br/>
 <br/>
 **Get Request of Url(api/Authorities/getall)** <br/>
    Get all the roles for the Users when creating a user or updating a user. The process starts with the **Router** which is **getall** and from the router it goes to the **AuthoritiesRouter** file and from ther we point it to the controller file **controller.getallauthority** method from there we  take the request and pass it to the service file which is **service.getallauthority** method from there it is goes to the DAO file which is **dao.getallauthority** and in DAO file we connect with the **Authorities.js** file and get the data from the database and pass it to the UI.
 <br/>
 <br/>
 **Get Request of Url(api/Organization/getall)** <br/>
    Get all the Organization for the Users when creating a user or updating a user. The process starts with the **Router** which is **getall** and from the router it goes to the **OrganizationRouter** file and from ther we point it to the controller file **controller.getallOrganization** method from there we  take the request and pass it to the service file which is **service.getallOrganization** method from there it is goes to the DAO file which is **dao.getallOrganization** and in DAO file we connect with the **Organization.js** file and get the data from the database and pass it to the UI.
 <br/>
 <br/>
  **Get Request of Url(api/User/get/:uuid)** <br/>
    Get the specific users details by there id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **UserRouter** file and from ther we point it to the controller file **controller.getalluserbyid** method from there we  take the request and pass it to the service file which is **service.getalluserbyid** method from there it is goes to the DAO file which is **dao.getalluserbyid** and in DAO file we connect with the **Users.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Put Request of Url(api/User/update)** <br/>
    Update the user records according to the changes made. The process starts with the **Router** which is **update** and from the router it goes to the **UserRouter** file and from ther we point it to the controller file **controller.updateuser** method from there we  take the request and pass it to the service file which is **service.updateuser** method from there it is goes to the DAO file which is **dao.updateuser** and in DAO file we connect with the **Users.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Put Request of Url(api/User/disableuser/:uuid)** <br/>
    Disables the user . The process starts with the **Router** which is **disableuser** and from the router it goes to the **UserRouter** file and from ther we point it to the controller file **controller.disableuser** method from there we  take the request and pass it to the service file which is **service.disableuser** method from there it is goes to the DAO file which is **dao.disableuser** and in DAO file we connect with the **Users.js** file and get the data from the database and pass it to the UI.
 <br/>
 <br/>
 **Get Request of Url(api/Authorities/get/:uuid)**<br/>
     Get the specific role detials by id. The process starts with the **Router** which is **get/:uuid** and from the router it goes to the **AuthoritiesRouter** file and from ther we point it to the controller file **controller.getauthorityById** method from there we  take the request and pass it to the service file which is **service.getauthorityById** method from there it is goes to the DAO file which is **dao.getauthorityById** and in DAO file we connect with the **Authorities.js** file and get the data from the database and pass it to the UI.
     <br/>
     <br/>
  **Post Request of Url(api/Authorities/create)**<br/>
     Create a role for an organization. The process starts with the **Router** which is **create** and from the router it goes to the **AuthoritiesRouter** file and from ther we point it to the controller file **controller.create_authority** method from there we  take the request and pass it to the service file which is **service.create_authority** method from there it is goes to the DAO file which is **dao.create_authority** and in DAO file we connect with the **Authorities.js** file and store the value in the database and pass it to the UI.
     <br/>
     <br/>
 **Put Request of Url(api/Authorities/update)** <br/>
    Update the role according to the changes made. The process starts with the **Router** which is **update** and from the router it goes to the **AuthoritiesRouter** file and from ther we point it to the controller file **controller.update_authority** method from there we  take the request and pass it to the service file which is **service.update_authority** method from there it is goes to the DAO file which is **dao.update_authority** and in DAO file we connect with the **Authorities.js** file and get the data from the database and pass it to the UI.
    <br/>
    <br/>
  **Put Request of Url(api/Authorities/disableuserrole/:uuid)** <br/>
    Disables the role . The process starts with the **Router** which is **disableuserrole/:uuid** and from the router it goes to the **AuthoritiesRouter** file and from ther we point it to the controller file **controller.disable_authority** method from there we  take the request and pass it to the service file which is **service.disable_authority** method from there it is goes to the DAO file which is **dao.disable_authority** and in DAO file we connect with the **Authorities.js** file and get the data from the database and pass it to the UI.
     
    
