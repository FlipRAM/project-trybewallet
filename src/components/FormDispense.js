import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class FormDispense extends React.Component {
  render() {
    const { currencies } = this.props;
    const payMethodList = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagDispense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <label htmlFor="value">
          {'Valor: '}
          <input
            data-testid="value-input"
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="currency">
          {'Moeda: '}
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
          >
            {currencies.length > 0 && currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          {'Método de pagamento: '}
          <select
            data-testid="method-input"
            id="method"
            name="method"
          >
            {payMethodList.map((method) => (
              <option key={ method } value={ method }>
                {method}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          {'Categoria: '}
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
          >
            {tagDispense.map((tag) => (
              <option key={ tag } value={ tag }>
                {tag}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="description">
          {'Descrição: '}
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormDispense.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(FormDispense);
