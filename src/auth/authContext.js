import { createContext, useState } from 'react';

// export const userSignIn()

const AuthContext = createContext({
  token: '',
  isUserLoggedIn: false,
  userRole: '',
  login: user => {},
  logout: () => {},
});

export const AuthContextProvider = props => {
  const localtoken = localStorage.getItem('jswToken');
  const expiryDate = localStorage.getItem('expiryDate');
  const localUerRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  const [token, setToken] = useState(localtoken);
  const [userRole, setUserRole] = useState(localUerRole);
  let userLoggedIn = !!token;

  // if (!localtoken || !expiryDate || !localUerRole) {
  //   logOutHandler();
  // }
  // if (new Date(expiryDate) <= new Date()) {
  //   logOutHandler();
  //   //   return;
  // }

  //   setToken(token);

  const remainingMilliseconds =
    new Date(expiryDate).getTime() - new Date().getTime();
  // setUserLoggedIn(true);

  const loginHandler = user => {
    // console.log(user);
    localStorage.setItem('jswToken', user.token);
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('userRole', user.userRole);
    const remainingMilliseconds = 60 * 60 * 1000; //1h
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());
    setToken(user.token);
    setUserRole(user.userRole);
    userLoggedIn = true;
  };

  const logOutHandler = () => {
    localStorage.removeItem('jswToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('expiryDate');
    setToken(null);
  };

  const authContextValue = {
    token: token,
    login: loginHandler,
    isUserLoggedIn: userLoggedIn,
    userRole: userRole,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
