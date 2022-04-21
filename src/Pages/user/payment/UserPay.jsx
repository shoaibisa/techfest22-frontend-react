//import React, { useState } from 'react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { baseUrl, localUrl } from '../../../API/api';
import { useSearchParams } from 'react-router-dom';
import AuthContext from '../../../auth/authContext';
import ErrorModel from '../../../components/UI/ErrorModel/ErrorModel';
import './Payment.css';
import vactorPay from '../../../images/Vectorpayment.png';

const UserPay = () => {
  const authContext = useContext(AuthContext);
  const [errosMade, setErrosMade] = useState();
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const payMentStatus = searchParams.get('paystatus');
    if (payMentStatus === 'true') {
      setErrosMade({
        title: 'Payment Success',
        message: 'Your payment recorded successfully!',
      });
    }
    if (payMentStatus === 'false') {
      setErrosMade({
        title: 'Payment Failed',
        message: 'Your payment was failed!',
      });
    }
    axios
      .get(`${baseUrl}/user/getUserById`, {
        headers: {
          Authorization: 'Bearer ' + authContext.token,
        },
      })
      .then(result => {
        if (
          result.status !== 200 ||
          (result.status !== 201 && result.data.isError)
        ) {
          setErrosMade({
            title: 'Auth Error',
            message: 'Wrong user auth!',
          });
          authContext.logout();
          return;
        }
        setUser(result.data.user);
      });
  }, []);
  const onErrosMadeHandle = () => {
    setErrosMade(null);
  };
  const paySilver = async () => {
    const userPayData = {
      price: 299,
    };

    const fetchdata = await axios({
      method: 'post',
      data: userPayData,
      url: `${baseUrl}/pay/user`,
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    console.log(fetchdata.data);
    // return console.log('clickef', fetchdata.data);
    window.location.href = fetchdata.data.url;
  };
  const payGold = async () => {
    const userPayData = {
      price: 599,
    };

    const fetchdata = await axios({
      method: 'post',
      data: userPayData,
      url: `${baseUrl}/pay/user`,
      headers: {
        Authorization: 'Bearer ' + authContext.token,
      },
    });
    // return console.log('clickef', fetchdata.data);
    window.location.href = fetchdata.data.url;
  };
  return (
    <div className="payBody">
      {errosMade && (
        <ErrorModel
          title={errosMade.title}
          message={errosMade.message}
          onErrosClick={onErrosMadeHandle}
        />
      )}
      {user && user.paymentDetails.isSuccess && (
        <div className="container-fluid mt-5 pt-5 center">
          <h1>You have already paid!</h1>
          <h2>
            Your subscription is{' '}
            {user.paymentDetails.subscriptionType === '299' ? 'SILVER' : 'GOLD'}
          </h2>
        </div>
      )}
      <div className="main">
        {user && !user.paymentDetails.isSuccess && (
          <div className="final__pay">
            <div className="Make__pay__final">
              <div className="verify__payment">
                <div className="verify__payment__top center">
                  <h3>Select your option</h3>
                  <p>Select your preffered option and pay </p>
                </div>
                <div className="verify__payment__card">
                  <div className="verify__payment__card__left">
                    <h6>Register for Online Events</h6>
                    <p>
                      Get a chance to compete nationwide through online events
                    </p>
                    <Button
                      className="Payment__maker___button mt-4"
                      variant="success"
                      style={{ marginBottom: '10px' }}
                      type="submit"
                      block
                      onClick={paySilver}
                      // onClick={() =>
                      //   setErrosMade({
                      //     title: 'Pay',
                      //     message: 'Payment process will begin shortly',
                      //   })
                      // }
                    >
                      299
                    </Button>
                  </div>
                  <div className="verify__payment__card__right">
                    <h6>Register for Online Events</h6>
                    <p>
                      Witness the techFEST at the best with comfortable stay and
                      compete through various LIVE Events
                    </p>
                    <Button
                      className="Payment__maker___button"
                      variant="success"
                      type="submit"
                      block
                      onClick={payGold}
                      // onClick={() =>
                      //   setErrosMade({
                      //     title: 'Pay',
                      //     message: 'Payment process will begin shortly',
                      //   })
                      // }
                    >
                      599
                    </Button>
                  </div>
                </div>
              </div>
              <img className="vector__pay__image" src={vactorPay} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserPay;
