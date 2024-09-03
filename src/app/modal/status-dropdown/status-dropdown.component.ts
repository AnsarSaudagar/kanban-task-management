import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-status-dropdown',
  templateUrl: './status-dropdown.component.html',
  styleUrls: ['./status-dropdown.component.css'],
})
export class StatusDropdownComponent implements OnInit, OnChanges {
  // arr = ['Todo', 'Doing', 'Done'];
  model = '';
  columnsArr = [];
  boardsNum = 0;
  status = '';
  taskNum = 0;
  mainData = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.mainData = this.mainService.boards;

    this.route.params.subscribe((params: Params) => {
      this.route.parent.params.subscribe((params: Params) => {
        this.boardsNum = params['id'];
      });
      this.status = params['taskName'];
      this.taskNum = params['taskId'];
    });
    this.columnsArr = this.mainService
      .getBoardsColumns(this.boardsNum)
      .map((el) => {
        return el.name;
      });
    this.model = this.status;
  }

  ngOnChanges(changes: SimpleChanges): void {}
  onClickDropdown() {
    console.log('check');
  }
  onChangeDropdown() {
    this.mainService.changeStatus(
      this.boardsNum,
      this.status,
      this.taskNum,
      this.model
    );
  }
}
