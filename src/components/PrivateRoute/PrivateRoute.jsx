import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  // TODO: Use the user in context to determine whether to redirect to /login DONE DONE DONE (Maybe)
  
  const { user } = useUser();

  const isLoggingIn = false
 
  //Thinking it out--
  // <Route render={({ location }) => user ? isLoggingIn : <Redirect to {{ pathname: '/login', state: {from: location }}} /> 

//piecing it together
  return <Route {...rest} render={({ location }) => user ? (children
  ) : (
    <Redirect to={{ pathname: '/login',
  state:{from: location },
}}
/>
  )} />;

}
