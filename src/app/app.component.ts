import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyTitle';
  public value = 'Lahs';
  public color = 'hotpink';
  public number = 3.14159;

  public onClick(): void {
    alert('Hello Lahs!');
  }
  public onMouseMove(): void {
    console.log('Hello!');
  }

  public onClick2(event: MouseEvent): void {
    alert(event.clientX);
  }
  public onMouseMove2(event: MouseEvent): void {
    console.log('2.: onMouseMove2', event.clientX);
  }

  // 4. und 5.
  public todoObject = { name: 'Wash clothes', done: false, id: 3 };
  catchDoneEvent(todo: any) {
    console.log('4./5.:', todo);
    alert(JSON.stringify(todo));
  }
}
