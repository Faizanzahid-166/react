import React from "react";
import Usercontext from "./Usercontext";

const UsercontextProvider = ({children}) => {

    const [user, setuser] = React.useState(null)
    const [error, setError] = React.useState("");
return(
  <Usercontext.Provider value={{user, setuser, error, setError}}>
    {children}
  </Usercontext.Provider>
)
  
}

export default UsercontextProvider;