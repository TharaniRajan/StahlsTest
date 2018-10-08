import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl = 'https://stahlsportaldev.azurewebsites.net';
    //public baseUrl = 'http://localhost:8080';
    public analyticsUrl = 'https://stahlsportalanalyticsdev.azurewebsites.net';
    //public analyticsUrl = 'http://localhost:5000';

    public syncserviceUrl = 'http://localhost:3000';
    public reporturl = '';
    public browser_language: string;
}
