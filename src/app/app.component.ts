import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  
  ngAfterViewInit(): void {
  }
  title = 'hotelinventoryapp';
  longinType = 'Admin';


  // // dynamicly load component
  // @ViewChild('user', {read: ViewContainerRef} ) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   console.log(this.vcr);
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

  @ViewChild('name',{static:true}) name! : ElementRef
  ngOnInit(): void {
    console.log('App component onInit');
    this.name.nativeElement.innerHTML = 'App main';
  }
  
}
