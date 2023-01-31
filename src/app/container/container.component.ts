import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit{
  ngAfterContentInit(): void {
    this.employeeComponent.employee = 'Abdullah';
  }
  @ContentChild(EmployeeComponent) employeeComponent! : EmployeeComponent
}
