import React, { useState } from 'react';
import './App.css';

const LoanInterestCalculator = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    interestRate: '',
  });

  const [transactions, setTransactions] = useState([]);
  const [amountUsed, setAmountUsed] = useState('');

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    const used = parseFloat(amountUsed);
    const rate = parseFloat(user.interestRate);

    if (!isNaN(used) && used > 0 && rate > 0) {
      const interest = ((used * rate) / 100).toFixed(2);
      const newTransaction = {
        id: transactions.length + 1,
        amountUsed: used,
        interest,
        date: new Date().toLocaleDateString(),
      };
      setTransactions([...transactions, newTransaction]);
      setAmountUsed('');
    }
  };

  const totalUsed = transactions.reduce((sum, t) => sum + t.amountUsed, 0);
  const totalInterest = transactions.reduce((sum, t) => sum + parseFloat(t.interest), 0);

  return (
    <div className="calculator-card">
      <h2>Loan Management Dashboard 🧾</h2>

      <div className="input-group">
        <label>Name:</label>
        <input name="name" value={user.name} onChange={handleInputChange} />
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input name="email" value={user.email} onChange={handleInputChange} />
      </div>

      <div className="input-group">
        <label>Phone:</label>
        <input name="phone" value={user.phone} onChange={handleInputChange} />
      </div>

      <div className="input-group">
        <label>Loan Amount (₹):</label>
        <input
          name="loanAmount"
          type="number"
          value={user.loanAmount}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input
          name="interestRate"
          type="number"
          value={user.interestRate}
          onChange={handleInputChange}
        />
      </div>

      <hr />

      <div className="input-group">
        <label>New Transaction - Amount Used (₹):</label>
        <input
          type="number"
          value={amountUsed}
          onChange={(e) => setAmountUsed(e.target.value)}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <div className="result">
        <h3>Total Used: ₹{totalUsed.toFixed(2)}</h3>
        <h3>Total Interest Payable: ₹{totalInterest.toFixed(2)}</h3>
      </div>

      <div className="transaction-history">
        <h4>Transaction History</h4>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Used (₹)</th>
                <th>Interest (₹)</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.date}</td>
                  <td>{t.amountUsed}</td>
                  <td>{t.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LoanInterestCalculator;
