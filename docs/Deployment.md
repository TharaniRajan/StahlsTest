![Logo](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/favicon.ico?raw=true"Logo")
# STAHLS Deployment
1. Stahls application consist of three application<br/>
  1. Stahlsportal<br/>
  2. StahlsportalAnalyticsService<br/>
  3. StahlsportalSyncService<br/>

# Prerequisites
  1. [Install Node.js and NPM](https://nodejs.org/en/)
  1. Azure CLI
  
# Installation 
  ### Azure cli in Ubuntu 
    1. AZ_REPO=$(lsb_release -cs)
      echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | \
      sudo tee /etc/apt/sources.list.d/azure-cli.list <br/>
   1. curl -L https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - 
   1. sudo apt-get install apt-transport-https 
   1. sudo apt-get update && sudo apt-get install azure-cli 

Once you installed the azure cli in your machine follow the commands to login the azure from the terminal<br/>
    1. az login <br/>
    2. If the CLI can determine your default browser and has access to open it, it will do so and direct you immediately to a sign in page.<br/>
    3. Otherwise, you need to open a browser page and follow the instructions on the command line to enter an authorization code after navigating to https://aka.ms/devicelogin in your browser.<br/>
    4. Sign in with your account credentials in the browser.
    
Now you can able to create the web app server in azure from your local machine

# Stahls Environment
  Stahls Application have four environment for the deployment.<br/>
  1. Dev
  2. Test
  3. Stage
  4. Prod
 
 ![Resource](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/Resourcegroup.jpg?raw=true"Resource")
 
  For Each environment we have separate Resource group  in the azure and all the applications are deployed under the azure web app services.
  
 # Create a Deployment User (THE ONE FOR GIT)
  ### Command
      az webapp deployment user set --user-name gepuser --password tang3456
      
  ### Create a resource group
   A [resource group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview#terminology) is a logical container into which Azure resources like web apps, databases, and storage accounts are deployed and managed
   
  ### Command
   az group create --name myResourceGroup --location "East US"
  
 ### Command
  az appservice plan create --name myServicePlanName --resource-group myResourceGroup--sku S1 --is-linux
  
 # Create Azure Web App Service
 
  ### Command
    az webapp create --resource-group myResourceGroup --plan myServicePlanName --name myWebApp --runtime "NODE|9.4" --          deployment-local-git
 Once this is done you have to build the desktop code using **ng build** command then copy the code to backend_stahls/client directory and  push the code locate in the backend_stahls folder from your source and **make sure .npmrc is within it and that you define port 8080 in the main.js**
 
 ## Application Logs
 
  We can see the logs in two ways 
    1. Using ssh from azure 
    2. Using FTP using 
    
  ## Using SSH
   In the Azure Portal , Click you Web App Service and you can able to see SSH option in the left panel using this ssh azure is providing the ssh panel in the browser itself. 
   
   ![SSH](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/SSH.jpg?raw=true"SSH")
   
   Once you login successfully it throw the ssh panel in your browser. And you can see the logs by using the following path **/home/site/wwwroot/log/<AppName-$date.log>**
   
   ![sshportal](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/SSHportal.jpg?raw=true"sshportal")
   
   # Using FTP
   In the Azure Portal , Click you Web App Service and you can able to see Diagnostics logs option in the left panel . In Diagnostics logs you can able to see the FTP URL. Once you put this URL in the browser it will promt for UserName and Password. We already create the username and using command [az webapp deployment user set --user-name gepuser --password tang3456] And we can see the logs in the following path **→ site ->wwwroot->log-><AppName-$date.log>**
   
   ![FTP](https://github.com/GeppettoSoftware/StahlsTest/blob/master/docs/FTP.jpg?raw=true"FTP")
   
 # Stahls MSSQL Database
   We are using Azure SQL Database for the stahls Application which is running as PAAS Service.we have four different database server across all the environment.
   
 ### To Create SQL Database :  
   1. Move the Resource Group where you need to create a SQL database and click the Add icon and search for SQL database
       **Need to add the image**
       
   2. If you want to create a new server, click on create new server or select the which is already created and enter the database name as we want and click create to create the database
   
      **Need to add the image**
      
 # ELK Stack Installation
ELK stack was installed under the ip address 104.210.55.239 (its the VM which is running under the STAHLS-RG resource group

### Above IP credentials(for connecting via ssh): 
    username: khali 
    password: Meesa211218@
  
  # ELK was setup under docker environment:
      Run a container from the image with the following command:
      docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -d --name elk sebp/elk
  This command publishes the following ports, which are needed for proper operation of the ELK stack:
    1. 5601 (Kibana web interface).
    2. 9200 (Elasticsearch JSON interface).
    3. 5044 (Logstash Beats interface, receives logs from Beats such as Filebeat).
    
  For more information :ELK was setup by the following URL instruction https://elk-docker.readthedocs.io/
  
   **Need to add image**
   
 # Nexus Installation
   Nexus repo was installed under the ip address 104.210.55.239 (its the VM which is running under the STAHLS-RG resource group
   
 # Nexus repo Credentials:
    Username: admin
    Password: tang3456
    
#### Run a container from the image with the following command:
     docker run -d -p 8081:8081 --name nexus sonatype/nexus3
    
  For more information: Nexus was setup by the following URL instruction https://hub.docker.com/r/sonatype/nexus3/
  
  **Need to add image** 
