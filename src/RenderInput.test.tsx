import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderInput from './RenderInput';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    // RenderInput をレンダリングする際にダミーの関数を渡す。
    const dummyOutputConsole = jest.fn();
    render(<RenderInput outputConsole={dummyOutputConsole} />);
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getAllByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('Input form onChange event', () => {
  it('Should update input value correctly', async () => {
    const dummyOutputConsole = jest.fn();
    render(<RenderInput outputConsole={dummyOutputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter') as HTMLInputElement; // 型キャスト
    await userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('Console button conditionally triggered', () => {
  it('Should not trigger output function', async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    await userEvent.click(screen.getByRole('button'));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it('Should trigger output function', async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter');
    await userEvent.type(inputValue, 'test');
    await userEvent.click(screen.getByRole('button'));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
