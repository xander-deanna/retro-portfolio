import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext({});

const initialState = {
  menu: false,
  AboutSiteModal: false,
  hidePortfolioModalButton: true,
  hideContactModalButton: true,
  hideAboutMeModalButton: true,
  hideAboutSiteModalButton: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload,
      };

    // portfolio modal cases
    case 'SET_PORTFOLIO_MODAL':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        PortfolioModal: action.payload,
      };
    case 'SET_HIDE_PORTFOLIO_MODAL_BUTTON':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        hidePortfolioModalButton: action.payload,
      };

    // contact modal cases
    case 'SET_CONTACT_MODAL':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        ContactModal: action.payload,
      };
    case 'SET_HIDE_CONTACT_MODAL_BUTTON':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        hideContactModalButton: action.payload,
      };

    // about ME modal cases
    case 'SET_ABOUT_ME_MODAL':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        AboutMeModal: action.payload,
      };
    case 'SET_HIDE_ABOUT_ME_MODAL_BUTTON':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        hideAboutMeModalButton: action.payload,
      };

    // about SITE modal cases
    case 'SET_ABOUT_SITE_MODAL':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        AboutSiteModal: action.payload,
      };
    case 'SET_HIDE_ABOUT_SITE_MODAL_BUTTON':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        hideAboutSiteModalButton: action.payload,
      };

    // default
    default:
      return state;
  }
}

function setBodyOverflow(property) {
  document.body.style.overflow = property;
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
