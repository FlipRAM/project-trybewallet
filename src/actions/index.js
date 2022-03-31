// Coloque aqui suas actions
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const CHANGE_WALLET = 'CHANGE_WALLET';

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});

export const changeWallet = (state) => ({
  type: CHANGE_WALLET,
  state,
});
