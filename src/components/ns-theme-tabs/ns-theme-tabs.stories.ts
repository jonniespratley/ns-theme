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
import { withKnobs } from '@storybook/addon-knobs';

const tabs = [{ id: 1, label: 'Tab 1' }];
storiesOf('ns-theme-tabs', module)
  .addDecorator(withKnobs)

  .add('with Home tab', () => {
    return `<ns-theme-tabs items=${tabs}></ns-theme-tabs>`;
  });
