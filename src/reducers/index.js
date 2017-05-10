// import { createStore, compose } from 'redux';
// export const store = createStore(render, initialState)


const initialState = {
  count: { strikes: 0, balls: 0 },
  batterAttempt: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'THROW_STRIKE':
      return { ...state, pitcherAttempt: 'THROW_STRIKE' }
    case 'THROW_BALL':
      return { ...state, pitcherAttempt: 'THROW_BALL' }
    case 'SWING_AND_HIT':
      return initialState
    case 'SWING_AND_MISS':
      return { ...state, count: { ...state.count, strikes: state.count.strikes + 1 } }
    case 'NO_SWING':
      let { count } = state
      if (state.pitcherAttempt === 'THROW_STRIKE') {
        return { ...state, count: { ...count, strikes: count.strikes + 1 } }
      } else {
        return { ...state, count: { ...count, balls: count.balls + 1 }}
      }
    default:
      return state
  }
}



// function reducer(state = initialState, action) {
//   switch(action.type) {
//
//     case 'THROW_STRIKE':
//       return { ...state, pitcherAttempt: 'THOW_STRIKE'}
//
//     case 'THROW_BALL':
//       return { ...state, pitcherAttempt: 'THROW_BALL'}
//
//     case 'SWING_AND_HIT':
//       return initialState
//
//     case 'SWING_AND_MISS':
//       return { ...state, count: { ...state.count, strikes: state.count.strikes + 1} }
//
//     case 'NO_SWING':
//       // let { count } = state
//       if (state.pitcherAttempt === 'THROW_STRIKE') {
//         if (state.count.strikes === 2){
//           return initialState
//         } else {
//           return { ...state, count: { ...count, strikes: count.stikes + 1 } }
//             } else {
////           if (state.count.balls === 3) {
//             return initialState
//           }  else {
//             return { ...state, count: { ...count, balls: count.balls + 1 } }
//
//       }
//       // } if { ...state, count: { ...balls === 4 { ....count, state.count.balls }}
//       }
//       }
//     }
//     default:
//       return state
//   }
// }

// export default reducer;
