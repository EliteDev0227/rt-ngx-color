import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {RtNgxColorComponent} from './rt-ngx-color.component';
import { ColorSketchModule } from 'ngx-color/sketch';

@NgModule({
    declarations: [
        RtNgxColorComponent
    ],
    imports: [
        CommonModule,
        ColorSketchModule
    ],
    exports: [
        RtNgxColorComponent
    ]
})
export class RtNgxColorModule { }
