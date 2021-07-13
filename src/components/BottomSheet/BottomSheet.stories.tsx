import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Story } from "@storybook/react";
import { Props, BottomSheet } from './BottomSheet';
import { GridContainer, GradientContainer } from '../../../.storybook/components';

export default {
  title: 'Example/BottomSheet',
  component: BottomSheet,
  argTypes:{
    withScrollablePage:{
      table:{
        disable:true
      }
    }
  }
};


const Template = (args) => {
  const [{ isOpen }, updateArgs] = useArgs();

  
  const handleOpen = () => {
    console.log('BottomSheet/onOpen');
  };

  const handleClose = () => {
    console.log('BottomSheet/onClose');
    updateArgs({ isOpen: false });

    const confirmation = window.confirm(`
🥳 BottomSheet/onClose fired!

The BottomSheet will reappear if OK is selected.
    `);

    if (confirmation) {
      updateArgs({ isOpen: true });
    }

  };
  
  return (
    <>
      {args.withScrollablePage && <GridContainer count={36} />}
      <BottomSheet isOpen={isOpen} onOpen={handleOpen} onClose={handleClose} {...args} />
    </>
  )
};

export const Basic = Template.bind({});

Basic.args = {
  title: 'BottomSheet Title',
  isOpen: true,
  children: (
    <GradientContainer>
      A small amount of content.
    </GradientContainer>
  )
};

export const withDescription = Template.bind({});
withDescription.storyName = "with description";
withDescription.args = {
  title: 'BottomSheet Title',
  description: 'Additional description text',
  isOpen: true,
  children: (
    <GradientContainer>
      A small amount of content.
    </GradientContainer>
  )
};

export const HeavyContent = Template.bind({});
HeavyContent.storyName = "with scrollable children";
HeavyContent.args = {
  title: 'BottomSheet Title',
  description: 'Additional description text',
  isOpen: true,
  children: (
    <GradientContainer>
      <p>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <p>Phasellus iaculis facilisis augue, in varius augue hendrerit sed. Suspendisse et porttitor nisl. Quisque eu neque sollicitudin, luctus sem laoreet, sollicitudin lorem. Maecenas eget lorem eleifend, facilisis dolor sit amet, viverra nunc. Duis mattis vitae massa nec sagittis. Aenean sed sollicitudin turpis. Phasellus tincidunt ex quis erat ullamcorper varius. Nulla id diam sollicitudin, suscipit elit in, elementum mauris. Nulla gravida molestie pretium. Nullam vel euismod quam. Vestibulum iaculis et odio id pellentesque. Phasellus lacinia, risus eu porttitor congue, erat nisl porta ex, vitae luctus felis ante nec nulla. Quisque rhoncus viverra quam, vitae ullamcorper lorem ullamcorper vitae.</p>
      <p>In hac habitasse platea dictumst. Mauris vel nibh molestie ligula feugiat pharetra vel eget mi. Nulla vehicula ullamcorper justo, id mollis arcu laoreet a. Praesent rutrum mattis dolor sit amet mollis. Vestibulum eleifend massa vel lacinia lobortis. Aliquam mollis ante ex, a congue eros suscipit in. Duis eget varius turpis, a elementum dolor. Etiam facilisis massa orci, at commodo metus vestibulum et. Nulla bibendum dapibus convallis. In ultricies accumsan purus, vel ultrices nunc malesuada sit amet.</p>
      <p>Vestibulum ut ante id sem luctus posuere. Vivamus suscipit lectus sed hendrerit pretium. Nam rhoncus neque et lacus luctus, id mollis metus venenatis. Sed in lectus nec ex maximus vulputate hendrerit sed lacus. Vestibulum dignissim dictum lectus, aliquet facilisis purus condimentum non. Ut sed libero pulvinar, facilisis leo et, bibendum ex. Aenean interdum purus sed dictum vulputate.</p>
    </GradientContainer>
  )
};


export const ScrollableBody = Template.bind({});
ScrollableBody.storyName = "with scrollable body/background";
ScrollableBody.args = {
  title: 'BottomSheet Title',
  description: 'Additional description text',
  isOpen: true,
  withScrollablePage: true,
  children: (
    <GradientContainer>
      <p>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <p>Phasellus iaculis facilisis augue, in varius augue hendrerit sed. Suspendisse et porttitor nisl. Quisque eu neque sollicitudin, luctus sem laoreet, sollicitudin lorem. Maecenas eget lorem eleifend, facilisis dolor sit amet, viverra nunc. Duis mattis vitae massa nec sagittis. Aenean sed sollicitudin turpis. Phasellus tincidunt ex quis erat ullamcorper varius. Nulla id diam sollicitudin, suscipit elit in, elementum mauris. Nulla gravida molestie pretium. Nullam vel euismod quam. Vestibulum iaculis et odio id pellentesque. Phasellus lacinia, risus eu porttitor congue, erat nisl porta ex, vitae luctus felis ante nec nulla. Quisque rhoncus viverra quam, vitae ullamcorper lorem ullamcorper vitae.</p>
      <p>In hac habitasse platea dictumst. Mauris vel nibh molestie ligula feugiat pharetra vel eget mi. Nulla vehicula ullamcorper justo, id mollis arcu laoreet a. Praesent rutrum mattis dolor sit amet mollis. Vestibulum eleifend massa vel lacinia lobortis. Aliquam mollis ante ex, a congue eros suscipit in. Duis eget varius turpis, a elementum dolor. Etiam facilisis massa orci, at commodo metus vestibulum et. Nulla bibendum dapibus convallis. In ultricies accumsan purus, vel ultrices nunc malesuada sit amet.</p>
      <p>Vestibulum ut ante id sem luctus posuere. Vivamus suscipit lectus sed hendrerit pretium. Nam rhoncus neque et lacus luctus, id mollis metus venenatis. Sed in lectus nec ex maximus vulputate hendrerit sed lacus. Vestibulum dignissim dictum lectus, aliquet facilisis purus condimentum non. Ut sed libero pulvinar, facilisis leo et, bibendum ex. Aenean interdum purus sed dictum vulputate.</p>
    </GradientContainer>
  )
};
