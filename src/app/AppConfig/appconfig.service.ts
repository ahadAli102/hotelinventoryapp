import { InjectionToken } from "@angular/core";
import { AppComponent } from "../app.component";
import { AppCongif } from "./appconfig.interface";

export const APP_SERVICE_CONFIG = new InjectionToken<AppComponent>('app.config');

export const APP_CONFIG: AppCongif = {
    apiEndpoint:'localhost:8080/api/v1'
};