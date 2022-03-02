import { Story } from '@storybook/angular/types-6-0';
import { MatInput, MatInputModule } from 'lib/src/public-api'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Component/Input',
    component: MatInput,
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

export const Basic: Story<MatInput> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatInputModule]
    },
    template: `<input matInput>`
})
Basic.args = {
    placeholder: "Some placeholder"
}
Basic.parameters = {controls: { exclude: ["bufferValue", "mode"] }}

export const Readonly: Story<MatInput> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatInputModule]
    },
    template: `<input matInput>`
})
Readonly.args = {
    readonly: true
}
Readonly.parameters = { controls: { disable: true } }