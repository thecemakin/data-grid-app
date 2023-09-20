import { Component } from '@angular/core';
import { Employee,EmployeesService } from 'src/app/employee.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  employees: Employee[] = [];
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;
  constructor(service: EmployeesService) {
      this.employees = service.getEmployees();
  }
}
