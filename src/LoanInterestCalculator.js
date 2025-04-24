import React, { useState } from 'react';
import './App.css';

const LoanInterestCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [amountUsed, setAmountUsed] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const calculateInterest = () => {
    const used = parseFloat(amountUsed);
    const rate = parseFloat(interestRate);
    if (!isNaN(used) && !isNaN(rate)) {
      return ((used * rate) / 100).toFixed(2);
    }
    return '0.00';
  };

  return (
    <div className="calculator-card">
      <h2>Loan Interest Calculator 💰</h2>

      <div className="input-group">
        <label>Loan Amount (₹):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="e.g. 100000"
        />
      </div>

      <div className="input-group">
        <label>Amount Used (₹):</label>
        <input
          type="number"
          value={amountUsed}
          onChange={(e) => setAmountUsed(e.target.value)}
          placeholder="e.g. 20000"
        />
      </div>

      <div className="input-group">
        <label>Interest Rate (% per annum):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="e.g. 10"
        />
      </div>

      <div className="result">
        <h3>Interest Payable: ₹ {calculateInterest()}</h3>
      </div>
    </div>
  );
};

export default LoanInterestCalculator;
