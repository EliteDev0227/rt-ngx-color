import { Component, OnInit } from '@angular/core';
import {LazyLoaderService} from '../services/LazyLoaderService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private _lazyLoadService: LazyLoaderService) {

  }
  
  ngOnInit(): void {
    
  }


}
