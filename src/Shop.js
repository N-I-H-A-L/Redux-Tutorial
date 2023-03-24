import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from './state/index.js';
import { bindActionCreators } from 'redux';

export default function Shop() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="container">
        Deposit/Withdraw money
        <br/>
        <button style={{margin: "2px", backgroundColor: "crimson", color: "white"}} onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
        <button style={{margin: "2px", backgroundColor: "crimson", color: "white"}} onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}
