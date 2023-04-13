const SET_VIEW = 'content.SET_VIEW';

export const setView = ({type: SET_VIEW});

const initialState = {
    num: 0,
    view: "view/layout/Main",
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        content: action.data
      };
    default:
      return state;
  }
}
