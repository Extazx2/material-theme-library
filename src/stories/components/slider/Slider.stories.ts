import { Story } from '@storybook/angular/types-6-0';
import { MatSlider, MatSliderModule } from 'lib/src/public-api'

export default {
    title: 'Component/Slider',
    component: MatSlider,
    argTypes: {
        value: {
            name: "value",
            description: "Value of the slider",
            defaultValue: 20,
            control: {
                type: "number",
            },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 20 }
            }
        },
        max: {
            name: "max",
            description: "Maximum value the slider can have",
            defaultValue: 100,
            control: {
                type: "number"
            },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "100" }
            }
        },
        min: {
            name: "min",
            description: "Minimum value the slider can have",
            defaultValue: 0,
            control: {
                type: "number"
            },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "0" }
            }
        },
        step: {
            name: "step",
            description: "The values at which the thumb will snap",
            defaultValue: 1,
            control: {
                type: "number"
            },
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "1" }
            }
        },
        disabled: {
            name: "disabled",
            description: "Whether the component is disabled.",
            defaultValue: false,
            control: {
                type: "boolean"
            },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
        },
        invert: {
            name: "invert",
            description: "Whether the slider is inverted (e.g. max on the left, min on the right).",
            defaultValue: false,
            control: {
                type: "boolean"
            },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
        },
        vertical: {
            name: "vertical",
            description: "Whether the component is vertical.",
            defaultValue: false,
            control: {
                type: "boolean"
            },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
        },
        thumbLabel: {
            name: "thumbLabel",
            description: "Whether or not to show the thumb label.",
            defaultValue: false,
            control: {
                type: "boolean"
            },
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            }
        },
        tickInterval: {
            name: "tickInterval",
            description: "How often to show ticks. Relative to the step so that a tick always appears on a step. Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values)",
            defaultValue: "auto",
            control: {
                type: "text"
            },
            table: {
                type: { summary: "'auto' | number" },
                defaultValue: { summary: "auto" }
            }
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
export const Customized: Story<MatSlider> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatSliderModule]
    },
    template: `
<mat-slider 
    [min]="min"
    [max]="max"
    [step]="step"
    [value]="value"
    [color]="color"
    [disabled]="disabled"
    [invert]="invert"
    [vertical]="vertical"
    [thumbLabel]="thumbLabel"
    [tickInterval]="tickInterval"
></mat-slider>
`
})

export const Basic: Story<MatSlider> = (args) => ({
    props: args,
    moduleMetadata: {
        imports: [MatSliderModule]
    },
    template: `<mat-slider aria-label="unit(s)"></mat-slider>`
})
Basic.args = {}