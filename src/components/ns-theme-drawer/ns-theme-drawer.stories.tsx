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
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


import readme from './readme.md';

storiesOf('ns-theme-drawer', module)
  .addDecorator(withKnobs)
  .add(
    'Default', () =>
    `
    <ns-theme-drawer header-text="Drawer Title">
    This is content.
    </ns-theme-drawer>
    `,
    {
      notes: {
        markdown: readme,
      }
    }
  )
  .add('with right anchor', () => {
    return `<ns-theme-drawer 
      header-text=${text('header-text', 'Drawer Header')}
      anchor="right" 
      is-opened=${boolean('is-open', true)}></ns-theme-header>`;
  })
  ;