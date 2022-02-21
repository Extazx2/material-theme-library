// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatButton, MatButtonModule } from '../../projects/sb-legendre-lib/src/public-api'


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  component: MatButton,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  // argTypes: {
  //   color: {
  //     description: "Color theme to apply",
  //     defaultValue: undefined,
  //
  //   },
  //   disabled: {
  //     type: "boolean",
  //     description: "Disabled status of the button",
  //     defaultValue: "false"
  //   }
  // },
  moduleMetadata: {
    imports: [MatButtonModule]
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<MatButton> = (args: MatButton) => ({
  props: args,
  template: `<button mat-raised-button [color]="color">Test</button>`
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  color: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "accent"
};

export const Warn = Template.bind({});
Warn.args = {
  color: "warn"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
