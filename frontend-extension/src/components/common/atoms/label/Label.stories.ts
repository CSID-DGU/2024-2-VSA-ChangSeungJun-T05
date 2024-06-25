import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from './Label';

const meta = {
  title: 'Common/Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLabel: Story = {
  args: {
    isIcon: false,
    label: '기본 헤드 6',
    size: 'H6',
  },
};

export const SearchLabel: Story = {
  args: {
    isIcon: true,
    icon: 'search',
  },
};

export const LoadingLabel: Story = {
  args: {
    isIcon: true,
    icon: 'loading',
    label: '사이트를 분석중입니다.',
  },
};

export const DangerousLabel: Story = {
  args: {
    isIcon: true,
    icon: 'dangerous',
    label: '의심되는 사이트입니다.',
  },
};

export const SafeLabel: Story = {
  args: {
    isIcon: true,
    icon: 'safe',
    label: '안전한 사이트입니다.',
  },
};

export const CaptionLabel: Story = {
  args: {
    size: 'B2',
    color: '#9FA4A8',
  },
};
