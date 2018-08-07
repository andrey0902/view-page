import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = environment.backGround;

  public testString(str, end: string): boolean {
    return (<string>str).endsWith(end);
  }

  public test() {

  }

  test2() {

  }

  myTest2() {

  }
}
