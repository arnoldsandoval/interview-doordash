import React from 'react';
import { Story } from "@storybook/react";
import { Button } from './Button';
import type { Props } from "./Button";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'dismiss'],
      control: 'radio'
    }
  }
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: 'Secondary button',
};

export const Dismiss = Template.bind({});
Dismiss.args = {
  variant: "dismiss",
  children: 'Dismiss',
};
