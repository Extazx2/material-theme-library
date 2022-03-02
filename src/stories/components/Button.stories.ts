// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { MatButton, MatButtonModule, MatRippleModule } from 'lib/src/public-api'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Component/Button',
    component: MatButton,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        color: {
            name: "Color",
            description: "Color theme to apply",
            defaultValue: "undefined",
            type: "ThemePalette",
            options: ['primary', 'accent', 'warn'],
            control: {
                type: "select",
            }
        }
    },
    // moduleMetadata needs to be added for each story.
    // moduleMetadata: {},
    // args: {
    //   // disabled: undefined,
    //   color: undefined,
    //   text: undefined
    // }
};

/**
 * Button types
 * - Basic (no color)
 * - Primary
 * - Accent
 * - Warn
 * - Disabled
 * - DisableRipples (no waves on click)
 */


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story = (args) => ({
    props: args,
    template: `<button mat-raised-button [color]="color">{{text}}</button>`,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
    color: "primary",
    text: "Primary"
};
Primary.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button [color]="primary">Some Text</button>`
        }
    }
}

export const Accent = Template.bind({});
Accent.args = {
    color: "accent",
    text: "Secondary"
};
Accent.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button [color]="accent">Some Text</button>`
        }
    }
}

export const Warn = Template.bind({});
Warn.args = {
    color: "warn",
    text: "Warn"
};
Warn.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button [color]="warn">Some Text</button>`
        }
    }
}

export const Disabled: Story = (args) => ({
    props: args,
    template: `<button mat-raised-button [color]="color" [disabled]="disabled">{{text}}</button>`,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
});
Disabled.args = {
    disabled: true,
    text: "Disabled"
};
Disabled.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button disabled>Some Text</button>`
        }
    }
}

export const DisableRipple: Story = (args) => ({
    props: args,
    template: `<div>
    <p>Click on the buttons to see the difference</p>
    <button mat-raised-button [color]="color" [disableRipple]="disableRipple">DisableRipple</button>
    <button mat-raised-button [color]="color">Classic</button>
</div>`,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
});
DisableRipple.args = {
    disableRipple: true,
}
DisableRipple.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button disableRipple>Some Text</button>`
        }
    }
}

export const Basic: Story = (args) => ({
    props: args,
    template: `<button mat-raised-button>{{text}}</button>`,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
});
Basic.args = {
    color: undefined,
    text: "Undefined color"
};
Basic.parameters = {
    docs: {
        source: {
            code: `<button mat-raised-button>Some Text</button>`
        }
    }
}
