import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  // TODO: Use the user in context to determine whether to redirect to /login 
  //DONE
  const { user } =  useUser();

  
; 
  //Thinking it out--
  // <Route render={({ location }) => user ? isLoggingIn : <Redirect to {{ pathname: '/login', state: {from: location }}} /> 

  //object in js is truthy. we can ask for a property value from within the value of the object

  //so, if we ask for the specific user id, we can see there is no id or email associated with the object, and that is what we expect to get. 

//piecing it together
  return <Route {...rest} render={({ location }) => user.id ? (children
  ) : (
    <Redirect to={{ pathname: '/login',
  state:{from: location }} }
/>
  )} />;

}
