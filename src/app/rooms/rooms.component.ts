import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomSummery } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{

  hotelName = 'hilton hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = 'Default rooms'

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;
  // @ViewChild(HeaderComponent, {static : true}) headerComponent! : HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent! : QueryList<HeaderComponent>;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Total rooms' + this.roomList.length;
  }
  addRoom() {
    const newRoom = {
      roomNumber: this.roomList.length,
      roomType: 'Single',
      amenities: 'Kitchen',
      price: 1000,
      photo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      checkInTime: new Date('29-Jan-2023'),
      checkOutTime: new Date('28-Feb-2023'),
      rating: 3.42
    };

    this.roomList = [...this.roomList, newRoom];
    console.log('adding room ' + this.roomList.length);
  }


  room!: Room

  roomSummery: RoomSummery = {
    totalRooms: 100,
    avaiableRooms: 234,
    bookedRooms: 70
  };

  roomList: Room[] = [];

  ngOnInit(): void {
    // console.log('OnInit Header component= '+this.headerComponent);
    this.roomList = [
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
  }

  ngDoCheck(): void {
    // it will detect any changes in the application
    console.log('on chnaged is called');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Header component= '+this.headerComponent);
    this.headerComponent.title = 'hSenid Rooms';
    // this.headerChildrenComponent.get(0)?.title ;
  }

  selectedRoom(clickedRoom: Room) {
    this.room = clickedRoom;
    console.log(this.room);
  }

  ngAfterViewChecked(): void {
    console.log('after view cheked');
  }
 
}
