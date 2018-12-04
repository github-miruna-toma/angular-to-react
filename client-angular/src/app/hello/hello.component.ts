import { Component, OnInit } from '@angular/core';
import {Dashboard} from '../../../../react-components/dashboard/dashboard';
import {ThreadsList} from '../../../../react-components/items-list/threadsList';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ReactDOM.render(new Dashboard({name: "1st react component"}).render(), document.getElementById('react-dashboard'));
    ReactDOM.render(new ThreadsList({name: "2nd react component"}).render(), document.getElementById('threads-list'));
  }

}
