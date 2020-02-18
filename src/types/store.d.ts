/// <reference types="react-scripts" />

type ReduxState = {};

type ReduxAction = {
    type: symbol;
    payload: Partial<ReduxState>;
};