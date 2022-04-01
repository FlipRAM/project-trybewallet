import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  checkExpense = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0;
    } if (expenses.length > 0) {
      const totalParc = expenses.reduce(
        (sum, curEl) => {
          sum += (
            parseInt(curEl.value, 10)
            * parseFloat(curEl.exchangeRates[curEl.currency].ask)
          );
          return sum;
        }, 0,
      );
      const total = totalParc.toFixed(2);
      return total;
    }
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p
          data-testid="total-field"
        >
          {this.checkExpense()}
        </p>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
        <p
          data-testid="email-field"
        >
          { email }
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string,
  expenses: propTypes.arrayOf(propTypes.shape),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
