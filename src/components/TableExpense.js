import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class TableExpense extends React.Component {
  render() {
    const { expenses } = this.props;
    const tableHeaderList = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    return (
      <table>
        <thead>
          <tr>
            {tableHeaderList.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((element) => (
            <tr key={ element.id }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{element.value}</td>
              <td>{element.currency}</td>
              <td>{element.exchangeRates[element.currency].ask}</td>
              <td>
                {`${parseInt(element.value, 10)
                * parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)
                }`}
              </td>
              <td>BRL</td>
              <td>
                <button
                  type="button"
                >
                  Editar
                </button>
                <button
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpense.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape),
}.isRequired;

export default connect(mapStateToProps, null)(TableExpense);
