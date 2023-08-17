import './lending.scss'
import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { Offer } from './offer/Offer';
import { LendingForm } from './form/LendingForm';
import { Price } from './price/Price';
import { AvailableTime } from './availableTime/AvailableTime';
import { ViewFeedbacks } from '../../components/feedbacks/viewFeedbacks/ViewFeedbacks';
import { AddFeedback } from '../../components/feedbacks/addFeedback/AddFeedback';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Lending: FC = () => {
  const { feedbacksReducer } = useTypedSelector(state => state)

  return (
    <>
      <Header />
      <div className='bg'><Offer /></div>
      <Price />
      <ViewFeedbacks feedbacks={feedbacksReducer.feedbacks} />
      <AddFeedback />
      <AvailableTime />
      <LendingForm />
    </>
  );
}