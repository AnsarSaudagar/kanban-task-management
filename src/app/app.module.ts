import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SideBarLinkComponent } from './side-bar/side-bar-link/side-bar-link.component';
import { ContentColumnComponent } from './main-section/content-column/content-column.component';
import { TaskCardComponent } from './main-section/content-column/task-card/task-card.component';
import { MainService } from './main.service';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalSubtaskComponent } from './modal/modal-subtask/modal-subtask.component';
import { StatusDropdownComponent } from './modal/status-dropdown/status-dropdown.component';
import { FormsModule } from '@angular/forms';
import { AddTaskModalComponent } from './main-section/content-column/add-task-modal/add-task-modal.component';
import { AddTaskModalSubtaskComponent } from './main-section/content-column/add-task-modal/add-task-modal-subtask/add-task-modal-subtask.component';

const appRoutes = [
  { path: '', component: MainSectionComponent },
  {
    path: 'main/:id',
    component: MainSectionComponent,
    children: [{ path: 'modal/:taskName/:taskId', component: ModalComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainSectionComponent,
    SideBarLinkComponent,
    ContentColumnComponent,
    TaskCardComponent,
    ModalComponent,
    ModalSubtaskComponent,
    StatusDropdownComponent,
    AddTaskModalComponent,
    AddTaskModalSubtaskComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
