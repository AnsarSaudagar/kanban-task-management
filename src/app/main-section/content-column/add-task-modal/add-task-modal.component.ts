import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css'],
})
export class AddTaskModalComponent {
  subTaskArr = ['', '', '', ''];
  getData(str: string, index: number) {
    this.subTaskArr[index] = str;
    console.log(this.subTaskArr);
  }
}
