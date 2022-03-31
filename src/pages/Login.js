import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { changeEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  changeForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  }

  validateForm = () => {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordMinLength = 6;
    if (emailRegex.test(email) && password.length >= passwordMinLength) {
      this.setState({
        isDisabled: false,
      });
    } if (!emailRegex.test(email) || password.length < passwordMinLength) {
      this.setState({
        isDisabled: true,
      });
    }
  }

  saveEmailAndExit = () => {
    const { saveEmail, history } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.changeForm }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.changeForm }
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.saveEmailAndExit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(changeEmail(email)),
});

Login.propTypes = {
  saveEmail: propTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
