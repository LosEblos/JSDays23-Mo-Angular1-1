import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickDirective } from './click.directive';
import { ColorDirective } from './color.directive';
import { TodoComponent } from './todo/todo.component';
import { YellPipe } from './yell.pipe';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    ColorDirective,
    ClickDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
