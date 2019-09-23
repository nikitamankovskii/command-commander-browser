import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'command-commmander-browser';
  commands: Array<any>;

  ngOnInit() {
    console.log('init')
    this.commands = [
      {
        id: 1,
        title: 'ls',
        command: 'ls'
      },
      {
        id: 2,
        title: 'cd',
        command: 'ls'
      }
    ]
  }
}
