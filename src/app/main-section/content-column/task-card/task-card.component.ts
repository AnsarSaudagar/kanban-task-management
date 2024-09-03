import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  @Input() singleTask: {
    title: string;
    description: string;
    status: string;
    subtasks: { title: string; isCompleted: boolean }[];
  };
  @Input() taskIndex: number;

  ngOnInit() {
    // this.count();
    // console.log(this.count());

    this.count();
  }

  comSubTask = 0;
  count() {
    const arr = this.singleTask.subtasks.map((el) => {
      if (el.isCompleted) {
        this.comSubTask++;
      }
    });
    // this.comSubTask = arr.length;
  }
  onClickCard() {
    console.log(this.router.url);

    if (this.router.url === '/') {
      this.router.navigate([
        '/main',
        0,
        'modal',
        this.singleTask.status,
        this.taskIndex,
      ]);
    } else {
      this.router.navigate(['modal', this.singleTask.status, this.taskIndex], {
        relativeTo: this.route,
      });
    }
  }
}
