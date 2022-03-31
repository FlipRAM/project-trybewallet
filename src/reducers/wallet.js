// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, REQUEST_CURRENCIES, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
      isFetching: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      currencies: ['Erro na API'],
      isFetching: false,
    };
  default: return state;
  }
};

export default wallet;
