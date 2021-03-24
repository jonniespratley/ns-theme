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
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import readme from './readme.md';

storiesOf('ns-theme-header', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return `<ns-theme-header header-text=${text('header-text', 'App Title')}></ns-theme-header>`;
    },
    {
      notes: {
        markdown: readme,
      },
    },
  )
  .add('with Menu Button', () => {
    return `<ns-theme-header show-menu=${boolean('show-menu', true)}></ns-theme-header>`;
  });
