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
RtNgxColorComponent.ɵfac = function RtNgxColorComponent_Factory(t) { return new (t || RtNgxColorComponent)(); };
RtNgxColorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RtNgxColorComponent, selectors: [["rt-ngx-color"]], decls: 1, vars: 0, consts: [[2, "display", "flex", "width", "300px", 3, "onChange"]], template: function RtNgxColorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "color-sketch", 0);
        i0.ɵɵlistener("onChange", function RtNgxColorComponent_Template_color_sketch_onChange_0_listener($event) { return ctx.handleChange($event); });
        i0.ɵɵelementEnd();
    } }, directives: [i1.SketchComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RtNgxColorComponent, [{
        type: Component,
        args: [{
                selector: 'rt-ngx-color',
                template: '<color-sketch style="display:flex; width:300px" (onChange)="handleChange($event)"></color-sketch>'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnQtbmd4LWNvbG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3J0LW5neC1jb2xvci9zcmMvbGliL3J0LW5neC1jb2xvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7OztBQVFuRSxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFrQjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztzRkFSVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQUZuQix1Q0FBa0Y7UUFBbEMsa0hBQVksd0JBQW9CLElBQUM7UUFBQyxpQkFBZTs7dUZBRWpHLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxtR0FBbUc7YUFDOUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbG9yRXZlbnQgfSBmcm9tICduZ3gtY29sb3InO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J0LW5neC1jb2xvcicsXG4gIHRlbXBsYXRlOiAnPGNvbG9yLXNrZXRjaCBzdHlsZT1cImRpc3BsYXk6ZmxleDsgd2lkdGg6MzAwcHhcIiAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIj48L2NvbG9yLXNrZXRjaD4nXG59KVxuZXhwb3J0IGNsYXNzIFJ0Tmd4Q29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ1J0Tmd4Q29sb3JDb21wb25lbnQgaW5pdCcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKCRldmVudDogQ29sb3JFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCRldmVudC5jb2xvcik7XG4gIH1cblxufSJdfQ==