import { Meta, StoryObj } from '@storybook/react';
import { Icon as IconComponent, IconsList } from './icon';

const meta: Meta<typeof IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  argTypes: {
    name: {
      control: 'select',
      options: IconsList
    },
    className: {
      control: 'text'
    },
    style: {
      control: 'object'
    },
    transform: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconComponent>;

// Default story for the "search" icon
export const Default: Story = {
  args: {
    name: 'eye-hide',
    className: '',
    style: {},
    transform: ''
  }
};
