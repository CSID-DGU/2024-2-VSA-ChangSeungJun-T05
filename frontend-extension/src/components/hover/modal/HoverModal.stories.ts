import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HoverModal } from './HoverModal';

const meta = {
  title: 'Hover/Modal',
  component: HoverModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHoverModal: Story = {
  args: {
    type: 'search',
    isCaption: true,
  },
};

export const SafeHoverModal: Story = {
  args: {
    type: 'safe',
    isCaption: false,
  },
};

export const LaodingHoverModal: Story = {
  args: {
    type: 'loading',
    isCaption: false,
  },
};

export const DangerousHoverModal: Story = {
  args: {
    type: 'dangerous',
    isCaption: true,
  },
};
