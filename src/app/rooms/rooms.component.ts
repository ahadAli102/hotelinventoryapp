import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomSummery } from './rooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'hilton hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = 'Default rooms'

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  // @ViewChild(HeaderComponent, {static : true}) headerComponent! : HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomService: RoomsService) { }

  /*
  constructor(private roomService: RoomsService) {
    By default Angular will first check if the component 
    defines a dependency injector in its decorator. 
    If it does(1.), the component(specifically: each of its instances)
    will receive its own instance of the service. 
    If it doesn’t find in on the component,
    it will look for a parent injector(e.g.the parent component
    (2.), its ancestors etc), up the injectors tree
    and in the end it will stop on the application - wide 
    instance of the service defined on a one of our NgModules. 
    Unless it’s not even there, in which case we will get
    a “No provider” error.
  }
  */

  /*
  constructor(@Self private roomService: RoomsService) {
    If we decorate the parameter with @Self(), 
    it’s like there was only the first step of 
    the previously discussed default behaviour. 
    The only place allowed to find the injector 
    is the component itself (3.). If it isn’t defined there… then error
  }
  */

  /*
  constructor(@Optional private roomService: RoomsService) {
    @Optional() decorator and in such case of no provider found, 
    no error will occur. Instead Angular will set the value f
    or our service tonull
  }
  */

  /*
  constructor(@SkipSelf private roomService: RoomsService) {
    The behaviour is like the default — we’re looking 
    up the injectors hierarchy, but this time skipping 
    the first step of looking for a possible injector 
    in the requesting componentl
  }
  */

  /*
  constructor(@Host private roomService: RoomsService) {
    @Host() decorator makes Angular to look for the injector 
    on the component itself, so in that regard it may look similar 
    to the @Self() decorator (7.). But that’s actually 
    not the end: if the injector is not found there, 
    it looks for the injector up to its host component.

    Then we also say that our component is being hosted by 
    ParentComponent — and if ParentComponent provides ToyService 
    and KidComponent does not, the @Host() decorator of 
    that inner component would still get that service’s instance (8.)
  }
  */
  
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
  this.roomList = this.roomService.roomsList;
}

ngDoCheck(): void {
  // it will detect any changes in the application
  console.log('on chnaged is called');
}

ngAfterViewInit(): void {
  console.log('AfterViewInit Header component= ' + this.headerComponent);
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
