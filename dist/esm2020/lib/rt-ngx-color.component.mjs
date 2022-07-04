import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "ngx-color/sketch";
export class RtNgxColorComponent {
    ngOnInit() {
        console.log('RtNgxColorComponent init');
    }
    handleChange($event) {
        console.log($event.color);
    }
}
RtNgxColorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RtNgxColorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RtNgxColorComponent, selector: "rt-ngx-color", ngImport: i0, template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>', isInline: true, components: [{ type: i1.SketchComponent, selector: "color-sketch", inputs: ["disableAlpha", "presetColors", "width"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RtNgxColorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rt-ngx-color',
                    template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnQtbmd4LWNvbG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3J0LW5neC1jb2xvci9zcmMvbGliL3J0LW5neC1jb2xvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7OztBQVFuRSxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFrQjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztpSEFSVSxtQkFBbUI7cUdBQW5CLG1CQUFtQixvREFGcEIsbUdBQW1HOzRGQUVsRyxtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxtR0FBbUc7aUJBQzlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb2xvckV2ZW50IH0gZnJvbSAnbmd4LWNvbG9yJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdydC1uZ3gtY29sb3InLFxuICB0ZW1wbGF0ZTogJzxjb2xvci1za2V0Y2ggc3R5bGU9XCJkaXNwbGF5OmZsZXg7IHdpZHRoOjMwMHB4XCIgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCI+PC9jb2xvci1za2V0Y2g+J1xufSlcbmV4cG9ydCBjbGFzcyBSdE5neENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdSdE5neENvbG9yQ29tcG9uZW50IGluaXQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSgkZXZlbnQ6IENvbG9yRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygkZXZlbnQuY29sb3IpO1xuICB9XG5cbn0iXX0=