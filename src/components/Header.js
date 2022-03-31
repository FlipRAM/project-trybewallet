import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p
          data-testid="total-field"
        >
          {0}
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </p>
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
});

Header.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
