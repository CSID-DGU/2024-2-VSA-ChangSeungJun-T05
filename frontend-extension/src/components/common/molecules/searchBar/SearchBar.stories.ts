import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Common/Molecules/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearchBar: Story = {
  args: { placeholder: '검색어를 입력하세요' },
};
