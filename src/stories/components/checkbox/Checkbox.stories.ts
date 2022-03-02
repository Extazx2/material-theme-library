import { Story } from '@storybook/angular/types-6-0';
import { MatCheckbox, MatCheckboxModule } from 'lib/src/public-api'

export default {
    title: 'Component/Checkbox',
    component: MatCheckbox,
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

export const Basic: Story = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatCheckboxModule]
    },
    template: `<mat-checkbox>{{text}}</mat-checkbox>`
})
Basic.args = {
    text: "Check me !",
}
// Basic.parameters = {controls: { exclude: ["bufferValue", "mode"] }}

export const Disabled: Story = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatCheckboxModule]
    },
    template: `<mat-checkbox disabled>Disabled Checkbox !</mat-checkbox>`
})
Disabled.parameters = {controls: { disable: true }}


export const Indeterminate: Story = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatCheckboxModule]
    },
    template: `
<mat-checkbox [indeterminate]="indeterminate" (indeterminateChange)="console.log('clicked')">Indeterminate status</mat-checkbox>
<br/>
<mat-checkbox [checked]="checked">Checked status</mat-checkbox>
`
})
Indeterminate.args = {
    indeterminate: true,
    checked: true
}
Indeterminate.parameters = {
    controls: { exclude: ["bufferValue", "mode"] },
    docs: {
        source: {
            code: `<mat-checkbox [indeterminate]="indeterminate" (indeterminateChange)="something(args)">Indeterminate status</mat-checkbox>`
        }
    }
}

export const LabelPosition: Story = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatCheckboxModule]
    },
    template: `
<mat-checkbox labelPosition="before">Label Position before</mat-checkbox>
<br/>
<mat-checkbox labelPosition="after">Label position after</mat-checkbox>
`
})
LabelPosition.args = {
    // labelPosition: "before",
}
LabelPosition.parameters = {
    controls: { exclude: ["bufferValue", "mode"] },
    docs: {
        source: {
            code: `<mat-checkbox [labelPosition]="labelPosition">Label Position</mat-checkbox>`
        }
    }
}