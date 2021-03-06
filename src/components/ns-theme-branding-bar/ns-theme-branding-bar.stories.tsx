// YourComponent.stories.tsx

/*
import { Story } from '@storybook/react';

import { YourComponent } from './YourComponent';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'YourComponent',
  component: YourComponent,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof YourComponent>> = (args) => <YourComponent {...args} />;
export const FirstStory = Template.bind({});
FirstStory.args = {
  //๐ The args you need here will depend on your component 
};
*/
import { storiesOf } from '@storybook/html';
import readme from './readme.md';

storiesOf('ns-theme-branding-bar', module).add(
  'Default', () =>
    `
    <ns-theme-branding-bar headerText="Drawer Title">
    
    </ns-theme-branding-bar>
    `,
  {
    notes: {
      markdown: readme,
    }
  }
);


