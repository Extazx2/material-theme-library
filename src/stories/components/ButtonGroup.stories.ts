import { Meta, Story } from "@storybook/angular/types-6-0";
import { MatButton, MatButtonModule, MatRippleModule, MatIconModule } from '../../../projects/sb-legendre-lib/src/public-api'

export default {
    title: 'Global/Buttons',
    component: MatButton,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    parameters: {
        controls: {
            disable: true
        },
    }
} as Meta;

export const Basic: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Basic Buttons</h3>
<div>
  <button mat-button>Basic</button>
  <button mat-button color="primary">Primary</button>
  <button mat-button color="accent">Accent</button>
  <button mat-button color="warn">Warn</button>
  <button mat-button disabled>Disabled</button>
  <a mat-button routerLink=".">Link</a>
</div>`
});

export const Raised: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Raised Buttons</h3>
<div>
  <button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>`
});

export const Stroked: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Stroked Buttons</h3>
<div class="example-button-row">
  <button mat-stroked-button>Basic</button>
  <button mat-stroked-button color="primary">Primary</button>
  <button mat-stroked-button color="accent">Accent</button>
  <button mat-stroked-button color="warn">Warn</button>
  <button mat-stroked-button disabled>Disabled</button>
  <a mat-stroked-button routerLink=".">Link</a>
</div>`
});

export const Flat: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Flat Buttons</h3>
<div class="example-button-row">
  <button mat-flat-button>Basic</button>
  <button mat-flat-button color="primary">Primary</button>
  <button mat-flat-button color="accent">Accent</button>
  <button mat-flat-button color="warn">Warn</button>
  <button mat-flat-button disabled>Disabled</button>
  <a mat-flat-button routerLink=".">Link</a>
</div>`
});

export const Icons: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatIconModule, MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Icon Buttons</h3>
<div class="example-button-row">
  <button mat-icon-button aria-label="Example icon-button with a home icon">
    <mat-icon>home</mat-icon>
  </button>
  <button mat-icon-button color="primary" aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button color="accent" aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button color="warn" aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button disabled aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
</div>`
});

export const Fab: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Fab Buttons</h3>
<div class="example-button-row">
  <button mat-fab>Basic</button>
  <button mat-fab color="primary">Primary</button>
  <button mat-fab color="accent">Accent</button>
  <button mat-fab color="warn">Warn</button>
  <button mat-fab disabled>Disabled</button>
  <button mat-fab aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <a mat-fab routerLink=".">Link</a>
</div>`
});

export const MiniFab: Story<MatButton> = (args: MatButton) => ({
    props: args,
    moduleMetadata: {
        imports: [MatButtonModule, MatRippleModule]
    },
    template: `
<style>
    button {
        margin: 5px;
    }
</style>
<h3>Mini Fab Buttons</h3>
<div>
  <button mat-mini-fab>Basic</button>
  <button mat-mini-fab color="primary">Primary</button>
  <button mat-mini-fab color="accent">Accent</button>
  <button mat-mini-fab color="warn">Warn</button>
  <button mat-mini-fab disabled>Disabled</button>
  <button mat-mini-fab aria-label="Example icon-button with a heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <a mat-mini-fab routerLink=".">Link</a>
</div>`
});
