import * as actions from "./password.actions";

const INITIAL_STATE = {
  passObj: {},
};

const passwordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.STORE_WEAPON_PASS:
      return {
        ...state,
        passObj: { ...state.passObj, weapon: action.payload },
      };
    case actions.STORE_STOLEN_PASS:
      return {
        ...state,
        passObj: { ...state.passObj, stolengoods: action.payload },
      };
    case actions.STORE_DRUGS_PASS:
      return { ...state, passObj: { ...state.passObj, drug: action.payload } };
    case actions.STORE_FIREWALL_PASS:
      return {
        ...state,
        passObj: { ...state.passObj, firewall: action.payload },
      };
    case actions.STORE_FAKENEWS_PASS:
      return {
        ...state,
        passObj: { ...state.passObj, fakenews: action.payload },
      };
    case actions.STORE_CRYPTO_PASS:
      return {
        ...state,
        passObj: { ...state.passObj, crypto: action.payload },
      };
    default:
      return state;
  }
};

export default passwordReducer;
