import {Component, ElementRef, Input, OnInit} from "@angular/core";
import { ColorEvent } from 'ngx-color';


@Component({
  selector: 'rt-ngx-color',
  template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>'
})
export class RtNgxColorComponent implements OnInit{

  ngOnInit(): void {
    console.log('RtNgxColorComponent init');
  }

  handleChange($event: ColorEvent) {
    console.log($event.color);
  }

}