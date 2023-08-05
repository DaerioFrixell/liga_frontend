import React from 'react';
import './lending.scss'
import { Header } from '../../components/header/Header';
import { Offer } from './offer/Offer';
import { LendingForm } from './form/LendingForm';
import { Price } from './price/Price';
import { AvailableTime } from './availableTime/AvailableTime';

export const Lending = () => {
  return (
    <>
      <Header />
      <div className='bg'><Offer /></div>
      <Price />
      <AvailableTime />
      <LendingForm />
    </>
  );
}

export default Lending;