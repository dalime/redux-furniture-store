export default function fighterReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FIGHTER':
      return action.payload.fighter;
      break;
    default:
      return state;
  }
}
