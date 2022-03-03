// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { MatSnackBar } from "lib/src/public-api";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { ExampleButtonModule } from "src/stories/components/snackbar/SnackbarButton.module";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export

const colorClasses = {
    default: "",
    primary: "mat-primary",
    accent: "mat-accent",
    warn: "mat-warn"
}

export default {
    title: 'Component/Snackbar',
    component: MatSnackBar,
    decorators: [componentWrapperDecorator(story => story), moduleMetadata({ imports: [ExampleButtonModule]})],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        color: {
            name: "Color",
            description: "Color theme to apply",
            defaultValue: "",
            type: "string",
            options: Object.values(colorClasses),
            mapping: colorClasses,
            control: {
                type: "select",
                labels: {
                    "": "default",
                    "mat-primary": "primary",
                    "mat-accent": "accent",
                    "mat-warn": "warn"
                }
            },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "default" }
            }
        },
        message: {
            name: "message",
            description: "Message to display in the snackbar",
            defaultValue: undefined,
            type: "string",
        },
        action: {
            name: "action",
            description: "Message to display in the snackbar as the action",
            defaultValue: undefined,
            type: "string",
        },
        horizontalPosition: {
            name: "horizontalPosition",
            description: "Horizontal position of the snackbar",
            defaultValue: "center",
            type: "MatSnackBarHorizontalPosition",
            options: ['start', 'center', 'end', 'left', 'right'],
            control: {
                type: "select"
            }
        },
        verticalPosition: {
            name: "verticalPosition",
            description: "Message to display in the snackbar as the action",
            defaultValue: "bottom",
            type: "MatSnackBarVerticalPosition",
            options: ["top", "bottom"],
            control: {
                type: "select"
            }
        },
    },
};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Snackbar: Story = (args) => ({
    props: args,
    template: `
<snack-bar-component-example 
    [message]="message"
    [action]="action"
    [color]="color"
    [horizontalPosition]="horizontalPosition"
    [verticalPosition]="verticalPosition"
></snack-bar-component-example>`,
    moduleMetadata: {
        imports: [ExampleButtonModule]
    },
});
Snackbar.args = {
}