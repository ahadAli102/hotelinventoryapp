 import { Inject, Injectable } from '@angular/core';
import { localStorageLocation } from 'src/app/localstorage.token';
import { AppCongif } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  public get roomsList() : Room[] {
    console.log('getting data from room service');
    return this.roomList;
  }

  private roomList: Room[] = [
    {
      roomNumber: 0,
      roomType: 'Apartment',
      amenities: 'fridge, tv, bathroom, belcony',
      price: 1000,
      photo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      checkInTime: new Date('23-Jan-2023'),
      checkOutTime: new Date('23-Feb-2023'),
      rating: 4.1234
    },
    {
      roomNumber: 1,
      roomType: 'Villa',
      amenities: 'fridge, tv, bathroom, belcony',
      price: 3000,
      photo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      checkInTime: new Date('1-Jan-2023'),
      checkOutTime: new Date('1-Feb-2023'),
      rating: 4.5678
    }
  ];
  

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppCongif,
              @Inject(localStorageLocation) private localStorage: Storage) { 
    console.log("room service is intialized");
    console.log(this.config.apiEndpoint);
    this.localStorage.setItem('name','Ahad Ali');
    console.log(this.localStorage.getItem('name'));
  }
}
