import { Story } from '@storybook/angular/types-6-0';
import { MatProgressBar, MatProgressBarModule } from 'lib/src/public-api'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Component/Progress Bar',
    component: MatProgressBar,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        value: {
            name: "value",
            description: "Value of the progress bar",
            defaultValue: 0,
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 5
            },
            table: {
                type: { summary: "number | undefined" },
                defaultValue: { summary: "undefined" }
            }
        },
        bufferValue: {
            name: "bufferValue",
            description: "Buffered value of the progress bar",
            defaultValue: 0,
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 5
            },
            table: {
                type: { summary: "number | undefined" },
                defaultValue: { summary: "undefined" }
            }
        },
        mode: {
            name: "mode",
            description: "Display mode of the Progress Bar",
            defaultValue: "determinate",
            type: "ProgressBarMode",
            options: ['determinate', 'indeterminate', 'buffer', 'query'],
            table: {
                type: { summary: "ProgressBarMode" },
                defaultValue: { summary: "determinate" }
            }
            // control: {
            //     type: "select"
            // }
        },
        color: {
            name: "color",
            description: "Color theme to apply",
            defaultValue: "primary",
            type: "ThemePalette",
            options: ['primary', 'accent', 'warn'],
            control: {
                type: "select",
            },
            table: {
                type: { summary: "ThemePalette" },
                defaultValue: { summary: "primary" }
            }
        }
    }
};

export const Determinate: Story<MatProgressBar> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressBarModule]
    },
    template: `<mat-progress-bar mode="determinate" [value]="value"></mat-progress-bar>`
})
Determinate.args = {
    value: 40
}
Determinate.parameters = {controls: { exclude: ["bufferValue", "mode"] }}

export const Indeterminate: Story<MatProgressBar> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressBarModule]
    },
    template: `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`
})
Indeterminate.parameters = { controls: { disable: true } }

export const Buffer: Story<MatProgressBar> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressBarModule]
    },
    template: `<mat-progress-bar mode="buffer" [value]="value" [bufferValue]="bufferValue"></mat-progress-bar>`
})
Buffer.args = {
    value: 20,
    bufferValue: 40
}
Buffer.parameters = {controls: { exclude: ["mode"] }}

export const Query: Story<MatProgressBar> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressBarModule]
    },
    template: `<mat-progress-bar mode="query"></mat-progress-bar>`
})
Query.args = {}
Query.parameters = { controls: { disable: true } }

export const Colored: Story<MatProgressBar> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressBarModule]
    },
    template: `<mat-progress-bar [color]="color" [value]="value"></mat-progress-bar>`
})
Colored.args = {
    color: "accent",
    value: 30,
}
Colored.parameters = {
    controls: { exclude: ["mode", "bufferValue"] }
}