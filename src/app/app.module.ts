import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent} from './task-dialog/task-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [AppComponent, HelloComponent, TaskComponent,TaskDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
