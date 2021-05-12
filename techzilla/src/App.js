import React, { useState } from 'react';
import QuestionLists from './components/QuestionLists';
import { useMutation, queryCache } from 'react-query';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/core';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/homepage/Home';
import Footer from '../src/components/footer/Footer'
import Navbar from './components/Navbar'
import Login from '../src/components/LoginSignUpPage/login.component'
import SignUp from '../src/components/LoginSignUpPage/signup.component'
import Account from '../src/components/Account/Account'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/homepage/Products'
import Details from './components/homepage/Details'
import Cart from './components/homepage/Cart'
import UserProfile from './components/Account/UserProfile';
import OrderHistory from './components/Account/OrderHistory';
import PaymentMethods from './components/Account/PaymentMethods';
import Checkout from './components/checkout/Checkout'
import { DataProvider } from './components/Context'



function App() {
  
  return (

    <DataProvider>

      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />
            <Route path='/products' component={Products} exact />
            <Route path='/product/:id' exact component={Details} />
            <Route path='/cart' component={Cart} />
            <Route path='/account' exact component={Account}/>
            <Route path='/Account/UserProfile' exact component={UserProfile} />
            <Route path='/Account/OrderHistory' exact component={OrderHistory} />
            <Route path='/Account/PaymentMethods' exact component={PaymentMethods} />
            <Route path='/checkout/Checkout' exact component={Checkout} />
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
