// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { MatFormFieldModule, MatIconModule, MatInputModule } from 'lib/src/public-api'
import { MatFormField } from "@angular/material/form-field";
import { Meta } from "@storybook/angular";
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Global/Form-Field',
    component: MatFormField,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    parameters: {
        controls: {
            disable: true
        },
    }
} as Meta;

/**
 * Button types
 * - Basic (no color)
 * - Primary
 * - Accent
 * - Warn
 * - Disabled
 * - DisableRipples (no waves on click)
 */

export const Appearance: Story<MatFormField> = (args: MatFormField) => ({
    props: args,
    moduleMetadata: {
        imports: [MatFormFieldModule, MatInputModule, MatIconModule]
    },
    template: `
<p>Form field appearance variants</p>
<p>
  <mat-form-field appearance="legacy">
    <mat-label>Legacy form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>`
});
Appearance.parameters = {
    docs: {
        source: {
            code: `
            <p>
  <mat-form-field appearance="legacy">
    <mat-label>Legacy form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
            `
        }
    }
}
