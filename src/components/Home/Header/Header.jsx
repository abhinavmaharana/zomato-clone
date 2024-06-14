import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { addUser, removeUser } from '../../../utils/Redux/userSlice';
import DownloadApp from '../../../assets/downloadapp.svg';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate('/ncr/restaurants');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="bg-transparent -mt-44">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 space-x-32 justify-between items-center text-primary">
          <div>
            <div className="flex items-center space-x-2">
              <img className="w-3" src={DownloadApp} alt="Download the app" />
              <h1 className="text-md">Get the app</h1>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-primary text-md font-semibold hover:underline"
            >
              Investor Relations
            </a>
            <a
              href="#"
              className="text-primary text-md font-semibold hover:underline"
            >
              Add Restaurant
            </a>
            <a
              href="#"
              className="text-primary text-md font-semibold hover:underline"
              onClick={toggleLogin}
            >
              Log In
            </a>
            <button
              className="text-white py-2 px-4 text-md font-semibold rounded-lg hover:bg-primary-dark"
              onClick={toggleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {showLogin && <Login />}
      {showSignUp && <SignUp />}
    </div>
  );
};

export default Header;
