import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { snack, nap, coffee, study } from '../data/actions/moodsActions';
import { useDispatch, useSelector } from 'react-redux';
//import { getFace, getCoffee, getNaps, getSnacks, getStudy } from '../data/selectors/moodsSelectors';


export default function Moods(){
  const dispatch = useDispatch();
  
  const { coffees, naps, snacks, studies } = useSelector(state => state);
  return (
    <>
      <Controls>
        <button onClick={() => dispatch(coffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(snack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(nap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face />
    </>
  );
}
