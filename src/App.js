import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
import Loader from "components/Loader";
function App() {
  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timeout = setTimeout( ()=> {
      setRedirect(true);
    },2000)
  
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  
  if(!user && !redirect) {
    return <Loader/>
  }

  return(
    <>
      <Toaster position="top-right"/>
      {showRoutes}
    </>
    )
  
}

export default App;
