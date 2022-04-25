import { createContext, useReducer } from 'react';

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialUser = {
  id: '',
  nickname: '',
  cityId: '',
  districtId: '',
};

function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        id: payload.id,
        nickname: payload.nickname,
        cityId: payload.cityId,
        districtId: payload.districtId,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export function ContextProvider({ children }) {
  const [user, userDispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
