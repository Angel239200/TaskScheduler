import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { SharedModule } from './shared/shared.module';
import { TaskRoutingModule } from './routing/task-routing.module';
import { TaskChooseTypeComponent } from './task/task-choose-type/task-choose-type.component';
import { TaskConfigureFieldsComponent } from './task/task-configure-fields/task-configure-fields.component';
import { TaskListComponent } from './task/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskChooseTypeComponent,
    TaskConfigureFieldsComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TaskRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
