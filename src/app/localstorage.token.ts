import { InjectionToken } from "@angular/core";

export const localStorageLocation = 
    new InjectionToken<any>('local storage',{
        providedIn: 'root',
        factory(){
            return window.localStorage;
        }
    });