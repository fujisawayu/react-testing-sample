import React from 'react';

type Framework = {
  id: number;
  item: string;
};

type FrameworkListProps = {
  frameworks?: Framework[];
};

const FrameworkList: React.FC<FrameworkListProps> = ({ frameworks }) => {
  if (!frameworks || frameworks.length === 0) {
    return <h1>No data !</h1>;
  }
  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
