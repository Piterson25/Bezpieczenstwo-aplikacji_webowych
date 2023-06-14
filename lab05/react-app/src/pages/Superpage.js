import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Superpage = () => {

  const { keycloak } = useKeycloak();

 return (
   <div>
    {keycloak.authenticated && keycloak.hasRealmRole("admin") &&
    <div>
      <h1 className="text-green-800 text-4xl">Welcome to the SUPERPAGE!</h1>
      <h1>ACCESS GRANTED! </h1>
      <img src="https://i.pinimg.com/originals/5a/5c/24/5a5c2488064a07a077d3d5d6e3a496aa.png" alt="all good"></img>
    </div>
    }
     
   </div>
 );
};

export default Superpage;