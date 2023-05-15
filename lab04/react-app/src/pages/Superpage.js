import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Superpage = () => {

  const { keycloak } = useKeycloak();

 return (
   <div>
    {keycloak.authenticated && keycloak.hasRealmRole("admin") &&
    <div>
                <h1 className="text-green-800 text-4xl">Welcome to the SUPERPAGE!</h1>
                  <h1>All good! </h1>
                  <img src="https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg" alt="all good"></img>
                  </div>
    }
     
   </div>
 );
};

export default Superpage;