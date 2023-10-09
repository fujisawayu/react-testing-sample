import React from 'react';

type RenderInputProps = {
  outputConsole: (inputValue: string) => void;
};

const RenderInput: React.FC<RenderInputProps> = ({ outputConsole }) => {
  const [input, setInput] = React.useState('');
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
