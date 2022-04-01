// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
  GET_QUOTATION,
  REQUEST_QUOTATION,
  FAILED_QUOTATION_REQUEST,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  isFetchingQuotation: false,
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
  case REQUEST_QUOTATION:
    return {
      ...state,
      isFetchingQuotation: true,
    };
  case GET_QUOTATION:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      isFetching: false,
    };
  case FAILED_QUOTATION_REQUEST:
    return {
      ...state,
      expenses: ['Erro na API'],
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };
  default: return state;
  }
};

export default wallet;
