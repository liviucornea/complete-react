import React from 'react';
export const initialMessage = 'INITIAL-Message';

export const HomeContext = React.createContext({homeMsgState: '', homeMsgDispatch: (e: string) => {} });

export const homeReducer = (state: string, action: string) => {
    switch (action) {
        case 'hello' :
            return 'Hello home'
        case 'bye':
            return 'Bye home'
        default:
            return state
    }
}

