import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  taskCondtionArr = [];
  taskName: string = '';
  taskDescription: string = '';
  subTasksArr: string[] = [];
  taskArr = [];
  mainTaskNumber: number = 0;
  mainTaskName: string = '';
  columnNumber: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.route.parent.params.subscribe((params: Params) => {
        this.columnNumber = +params['id'];
      });

      this.mainTaskName = params['taskName'];
      this.mainTaskNumber = +params['taskId'];
    });
    console.log(this.columnNumber);

    this.taskArr = this.mainService.getBoardsColumns(this.columnNumber);

    this.taskCondtionArr = this.taskArr.filter((el) => {
      if (el.name === this.mainTaskName) {
        return el.tasks;
      } else {
        return;
      }
    });
    this.taskName = this.taskCondtionArr[0].tasks[this.mainTaskNumber].title;
    this.taskDescription =
      this.taskCondtionArr[0].tasks[this.mainTaskNumber].description === ''
        ? 'No Descrtiption'
        : this.taskCondtionArr[0].tasks[this.mainTaskNumber].description;
    this.subTasksArr =
      this.taskCondtionArr[0].tasks[this.mainTaskNumber].subtasks;
    console.log(this.taskCondtionArr);
  }

  onClickChangeRoute() {
    // console.log('click');
    this.router.navigate(['../../../'], { relativeTo: this.route });
  }
}
