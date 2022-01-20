import React from 'react';
import { useRouter } from 'next/router';

const UserName = () => {
  const {
    query: { userName },
  } = useRouter();
  return (
    <div>
      <h1>ESTA ES LA PAGINA DEL USUARIO {userName}</h1>
    </div>
  );
};
export default UserName;
