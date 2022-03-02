// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { MatAutocomplete, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from 'lib/src/public-api'
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
export default {
    title: 'Component/Autocomplete',
    component: MatAutocomplete,
};

const Template: Story = (args) => ({
    props: args,
    template: `
<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Number</mat-label>
    <input type="text"
           placeholder="Pick one"
           aria-label="Number"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      <mat-option *ngFor="let option of options" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatAutocompleteModule, BrowserAnimationsModule, ReactiveFormsModule, MatInputModule]
    },
});
export const SimpleAutocomplete = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
SimpleAutocomplete.args = {
    options: ['One', 'Two', 'Three'],
    myControl: new FormControl()
};