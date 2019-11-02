export function historyReducer (state = {
  data: []
}, action) {
  switch (action.type) {
    case 'ADD_TO_SEARCH_HISTORY': {
      const newList = state.data.slice()
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].city.id === action.payload.city.id) {
          return state
        }
      }
      newList.push(action.payload)
      return {
        ...state,
        data: newList
      }
    }
    default: {
      return state
    }
  }
}