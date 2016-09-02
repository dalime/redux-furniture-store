import axios from 'axios';

export function receiveFighter(fighter) {
  return {
    type: 'RECEIVE_FIGHTER',
    payload: { fighter }
  }
}

export function fetchFighters() {
  return dispatch => {
    axios.get('/api/fighters')
      .then(res => {
        console.log(res.data);
      })
      .then(fighter => {
        dispatch(receiveFighter(fighter));
      })
      .catch(console.error)
  }
}

// export function fetchPokemon() {
//   return dispatch => {
//     axios.get('/api/pokemon')
//       .then(res => res.data)
//       .then(pokemon => {
//         dispatch(receivePokemon(pokemon));
//       })
//       .catch(console.error)
//   }
// }
