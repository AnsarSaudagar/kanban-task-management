import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private mainService: MainService) {}
  boardNames = [];
  ngOnInit(): void {
    this.boardNames = this.mainService.getBoardNames();
  }
}
