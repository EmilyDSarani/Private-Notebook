import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';

import styles from './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();
  const { from } = location.state || {from: '/notes'};

  const handleSubmit = async (email, password) => {
    try {
      // TODO: Implement sign up & sign
      // Use isSigningUp to determine whether to sign up or sign in a user
      // If signing in: set the user ({id, email}) and redirect to /notes
      // If signing up: redirect to /confirm-email
      // Use the corresponding functions from `/services/users` for both cases

      if(isSigningUp){
        const user = await signInUser(email,password);
        setUser(user);
        history.replace('/confirm-email');
      } else {
        const user = await signUpUser(email, password)
        setUser(user);
        history.replace('/notes');
      }






      !isSigningUp ? await signInUser({id, email}) :
      await signUpUser({email, password}) 
      
      history.replace(from)
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className={styles.authForm}>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome back!'}</h2>
      <br />

      <UserForm
        onSubmit={handleSubmit}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />

      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </section>
  );
}
