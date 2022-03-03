// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { MatFormField, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from 'lib/src/public-api'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Component/Form-Field',
    component: MatFormField,
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
};

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const FormFieldInput: Story = (args) => ({
    props: args,
    template: `
<p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule]
    },
});

export const FormFieldSelect: Story = (args) => ({
    props: args,
    template: `
<mat-form-field appearance="fill">
  <mat-label>Select</mat-label>
  <mat-select>
    <mat-option value="one">First option</mat-option>
    <mat-option value="two">Second option</mat-option>
  </mat-select>
</mat-form-field>
`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule]
    },
});

export const FormFieldTextarea: Story = (args) => ({
    props: args,
    template: `
<mat-form-field appearance="fill">
  <mat-label>Textarea</mat-label>
  <textarea matInput></textarea>
</mat-form-field>
`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule]
    },
});

export const FormFieldPrefixAndSuffix: Story = (args) => ({
    props: args,
    template: `
<div class="example-container">
  <mat-form-field appearance="fill" style="margin: 3px">
    <mat-label>Phone number</mat-label>
    <input matInput type="tel" required>
    <mat-icon matSuffix>phone</mat-icon>
    <mat-hint>Put your phone number</mat-hint>
  </mat-form-field>

  <mat-form-field appearance="fill" floatLabel="always" style="margin: 3px">
    <mat-label>Amount</mat-label>
    <input matInput type="number" class="example-right-align" placeholder="0">
    <span matPrefix>$&nbsp;</span>
    <span matSuffix>.00</span>
  </mat-form-field>
</div>
`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, BrowserAnimationsModule]
    },
})

export const FormFieldLabel: Story = (args) => ({
    props: args,
    template: `
<div class="example-container">
    <mat-form-field appearance="fill" style="margin: 3px">
        <input matInput placeholder="Simple placeholder" required>
    </mat-form-field>

    <mat-form-field appearance="fill" style="margin: 3px">
        <mat-label>Both a label and a placeholder</mat-label>
        <input matInput placeholder="Simple placeholder">
    </mat-form-field>
  
    <mat-form-field appearance="fill" style="margin: 3px">
        <mat-select required>
            <mat-option>-- None --</mat-option>
            <mat-option value="option">Option</mat-option>
        </mat-select>
        <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>
    </mat-form-field>
</div>
`,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, BrowserAnimationsModule]
    },
})

export const FormFieldError: Story = (args) => ({
    props: args,
    template: `
<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Email</mat-label>
    <input type="email" matInput [formControl]="emailFormControl" placeholder="Ex. pat@example.com">
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
</form>
    `,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule, ReactiveFormsModule]
    },
});
// IMPORTANT : ReactiveFormsModule is required for this to work
const error = new FormControl('', [Validators.required, Validators.email]);
FormFieldError.args = {
    emailFormControl: error
}