import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const UserName = () => {
  const {
    query: { userName },
  } = useRouter();
  return (
    <div>
      <Navbar />

      <h1>ESTA ES LA PAGINA DEL USUARIO {userName}</h1>
    </div>
  );
};
export default UserName;
