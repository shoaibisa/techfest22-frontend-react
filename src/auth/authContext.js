import { createContext, useState } from 'react';
let resetLogoutTimer;
const AuthContext = createContext({
  token: '',
  isUserLoggedIn: false,
  userRole: '',
  login: user => {},
  logout: () => {},
});

export const AuthContextProvider = props => {
  const localtoken = localStorage.getItem('jswToken');
  const localExpiryDate = localStorage.getItem('expiryDate');
  const localUerRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  const [token, setToken] = useState(localtoken);
  const [userRole, setUserRole] = useState(localUerRole);
  const [expiryDate, setExpiryDate] = useState(localExpiryDate);
  let userLoggedIn = !!token;

  // if (!localtoken || !expiryDate || !localUerRole) {
  //   logOutHandler();
  // }
  // if (new Date(expiryDate) <= new Date()) {
  //   logOutHandler();
  //   //   return;
  // }

  const calculateRemainingTime = expiryDate => {
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    return remainingMilliseconds;
  };

  const logOutHandler = () => {
    localStorage.removeItem('jswToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('expiryDate');
    setToken(null);
    if (resetLogoutTimer) {
      clearTimeout(resetLogoutTimer);
    }
  };

  const loginHandler = user => {
    // console.log(user);
    localStorage.setItem('jswToken', user.token);
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('userRole', user.userRole);
    const remainingMilliseconds = 7 * 3600 * 60 * 60 * 1000; //1h
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());
    setToken(user.token);
    setUserRole(user.userRole);
    userLoggedIn = true;

    const remainingTime = calculateRemainingTime(expiryDate);

    resetLogoutTimer = setTimeout(logOutHandler, remainingTime);
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
