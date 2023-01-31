import { Component } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService] // new instance for this class
})
export class EmployeeComponent {
  employee:string = 'Ahad Ali';

  constructor(private roomService: RoomsService) {
  }

}
