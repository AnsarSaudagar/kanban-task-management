import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  columnsTemp = [];
  id: number = 0;
  constructor(private route: ActivatedRoute, private mainService: MainService) {
    // console.log(mainService.getBoardsColumns(0));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id) {
        this.columnsTemp = this.mainService.getBoardsColumns(this.id);
      } else {
        this.columnsTemp = this.mainService.getBoardsColumns(0);
      }
    });
  }
}
