import { INCREASE, DECREASE } from '../actions';

const initialState = {
  count: 0,
  title: 'Hey! I am at the redux store'
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE: {
//       return {
//         ...state,
//         count: state.count + 1
//       }
//     }
//     case DECREASE: {
//       return {
//         ...state,
//         count: state.count - 1
//       }
//     }
//     default:
//       return state
//   }
// }

// export default reducer;

const ACTION_HANDLERS = {
  [INCREASE]: (state) => ({...state, count: state.count + 1}),
  [DECREASE]: (state) => ({...state, count: state.count - 1})
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state) : state
}
