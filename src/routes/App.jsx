import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layaout from '@containers/Layaout';
import Login from '@pages/Login';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import useInitialState from '@hooks/useInitialState';
import PasswordRecovery from '@pages/PasswordRecovery';
import AppContext from '@context/AppContext';
import '@styles/global.css';
const app = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value = { initialState }>
        <BrowserRouter>
            <Layaout>
                <Routes>
                    <Route path="/" exact element ={<Home/>} />
                    <Route path="/login" exact element = {<Login/>} />
                    <Route path="/password-recovery" exact element ={<PasswordRecovery />} />
					<Route path="/send-email" exact element= {<SendEmail/>} />
					<Route path="/new-password" exact element= {<NewPassword />} />
					<Route path="/account" exact element= {<MyAccount/>} />
					<Route path="/signup" exact element= {<CreateAccount/>} />
					<Route path="/checkout" exact element= {<Checkout/>} />
					<Route path="/orders" exact element= {<Orders/>} />
                    <Route path="*" exact element = { <NotFound/>} />
                 </Routes>
            </Layaout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}
export default app;