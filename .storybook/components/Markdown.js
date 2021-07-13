import React from 'react';
import Markdown from 'markdown-to-jsx';
import { components } from '@storybook/components'

const overrides = {}

Object.keys(components).forEach((key) => {
  overrides[key] = {
      component: components[key]
  }
});

export default ({ content }) => (
  <Markdown options={{ overrides }}>{content}</Markdown>
)
