import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-modal-subtask',
  templateUrl: './add-task-modal-subtask.component.html',
  styleUrls: ['./add-task-modal-subtask.component.css'],
})
export class AddTaskModalSubtaskComponent {
  value: string = '';
  @Output() inputSend = new EventEmitter<string>();

  sendData() {
    this.inputSend.emit(this.value);
    this.value = '';
  }
  getValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
