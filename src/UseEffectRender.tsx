import React from 'react';
import axios from 'axios';

type User = {
  username: string;
  email: string;
};

const UseEffectRender = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const fetchJSON = async (): Promise<User> => {
    const res = await axios.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return res.data;
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
