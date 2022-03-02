import { Story } from '@storybook/angular/types-6-0';
import { MatProgressSpinner, MatProgressSpinnerModule, MatSpinner } from 'lib/src/public-api'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Component/Progress Spinner',
    component: MatProgressSpinner,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        value: {
            name: "value",
            description: "Value of the progress spinner",
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
        diameter: {
            name: "diameter",
            description: "The diameter of the progress spinner (will set width and height of svg).",
            defaultValue: 100,
            control: {
                type: "range",
                min: 0,
                max: 500,
                step: 10
            },
            table: {
                type: { summary: "number | undefined" },
                defaultValue: { summary: "undefined" }
            }
        },
        strokeWidth: {
            name: "strokeWidth",
            description: "Stroke width of the progress spinner",
            defaultValue: 10,
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1
            },
            table: {
                type: { summary: "number | undefined" },
                defaultValue: { summary: "undefined" }
            }
        },
        mode: {
            name: "mode",
            description: "Display mode of the Progress Spinner",
            defaultValue: "determinate",
            type: "ProgressSpinnerMode",
            options: ['determinate', 'indeterminate'],
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

export const Indeterminate: Story<MatProgressSpinner> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressSpinnerModule]
    },
    template: `<mat-progress-spinner mode="indeterminate"></mat-progress-spinner>`
})
// Indeterminate.parameters = { controls: { include: ["color"] } }

export const IndeterminateAlias: Story<MatSpinner> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressSpinnerModule]
    },
    template: `
<p>This is an alias for <br/><code>&lt;mat-progress-spinner mode="indeterminate"&gt;&lt;/mat-progress-spinner&gt;</code></p>
<mat-spinner></mat-spinner>
`
})
IndeterminateAlias.parameters = { controls: { disable: true } }

export const Determinate: Story<MatProgressSpinner> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressSpinnerModule]
    },
    template: `<mat-progress-spinner mode="determinate" [value]="value"></mat-progress-spinner>`
})
Determinate.args = {
    value: 40
}
Determinate.parameters = {controls: { include: ["value"] }}

export const Diameter: Story<MatProgressSpinner> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressSpinnerModule]
    },
    template: `<mat-progress-spinner mode="indeterminate" [diameter]="diameter"></mat-progress-spinner>`
})
Diameter.args = {
    diameter: 250
}
Diameter.parameters = { controls: { include: ["diameter"] } }

export const StrokeWidth: Story<MatProgressSpinner> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatProgressSpinnerModule]
    },
    template: `<mat-progress-spinner mode="indeterminate" [strokeWidth]="strokeWidth" [diameter]="diameter"></mat-progress-spinner>`
})
StrokeWidth.args = {
    diameter: 200,
    strokeWidth: 2
}
StrokeWidth.parameters = { controls: { include: ["diameter", "strokeWidth"] } }