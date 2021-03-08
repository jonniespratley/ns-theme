// YourComponent.stories.tsx

/*
import { Story } from '@storybook/react';

import { YourComponent } from './YourComponent';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'YourComponent',
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof YourComponent>> = (args) => <YourComponent {...args} />;
export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component 
};
*/
import { storiesOf } from '@storybook/html';

import readme from './readme.md';

storiesOf('ns-theme-drawer', module)
.add(
  'Default', () =>
    `
    <ns-theme-drawer headerText="Drawer Title">
    This is content.
    </ns-theme-drawer>
    `,
  {
    notes: {
      markdown: readme,
    }
  }
)
.add(
  'Opened', () =>
    `
    <ns-theme-drawer headerText="Drawer Title" isOpened>
    This is content.
    </ns-theme-drawer>
    `
);