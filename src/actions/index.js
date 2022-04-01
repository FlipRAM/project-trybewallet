// Coloque aqui suas actions
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const CHANGE_WALLET = 'CHANGE_WALLET';

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const FAILED_REQUEST = 'FAILED_REQUEST';

export const GET_QUOTATION = 'GET_QUOTATION';

export const REQUEST_QUOTATION = 'REQUEST_QUOTATION';

export const FAILED_QUOTATION_REQUEST = 'FAILED_QUOTATION_REQUEST';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const changeWallet = (state) => ({
  type: CHANGE_WALLET,
  state,
});

function getCurrencies(json) {
  const listFinal = [];
  Object.keys(json).forEach((key) => {
    if (key !== 'USDT') {
      listFinal.push(key);
    }
  });
  return { type: GET_CURRENCIES, currencies: listFinal };
}

function requestCurrencies() {
  return { type: REQUEST_CURRENCIES };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, error };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getCurrencies(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}

function getQuotation(obj, json) {
  obj.exchangeRates = json;
  return { type: GET_QUOTATION, expenses: obj };
}

function requestQuotation() {
  return { type: REQUEST_QUOTATION };
}

function failedQuotationRequest(error) {
  return { type: FAILED_QUOTATION_REQUEST, error };
}

export function fetchQuotation(obj) {
  return (dispatch) => {
    dispatch(requestQuotation());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getQuotation(obj, json)))
      .catch((error) => dispatch(failedQuotationRequest(error)));
  };
}
