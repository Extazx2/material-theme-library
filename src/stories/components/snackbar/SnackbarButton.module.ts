import { Component, Input, NgModule } from "@angular/core";
import { MatSnackBar, MatSnackBarModule } from "lib/src/public-api";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Component({
    selector: 'snack-bar-component-example',
    template: `<button (click)="openSnackBar()">Show snackbar</button>`,
})
export class ExampleButtonComponent {
    durationInSeconds = 5;

    @Input()
    message: string | undefined

    @Input()
    action: string | undefined

    @Input()
    color: string | undefined

    @Input()
    horizontalPosition: MatSnackBarHorizontalPosition | undefined

    @Input()
    verticalPosition: MatSnackBarVerticalPosition | undefined

    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar() {
        let classes = ["mat-toolbar"]
        if (this.color) {
            classes.push(this.color)
        }
        console.log(classes, this.verticalPosition, this.horizontalPosition)
        this._snackBar.open(this.message ?? "Some message", this.action ?? "", {
            duration: this.durationInSeconds * 1000,
            panelClass: classes,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
        });
    }
}


@NgModule({
    declarations: [ExampleButtonComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        // OverlayModule
        MatSnackBarModule
    ],
    exports: [
        ExampleButtonComponent
    ]
})
export class ExampleButtonModule {}