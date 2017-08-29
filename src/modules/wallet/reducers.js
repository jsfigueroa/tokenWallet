export const wallet = (state = { balance: 0 , privateKeys: [], publicKeys:[] }, action) => {
  console.log("wallet action:")
  console.log(action)
  switch (action.type) {
    case 'ADD_PRIV_KEY':
      return state
    case 'ADD_PUB_KEY':
        let pubs = state.publicKeys
        pubs.push(action.data)
        return { ...state,
                 publicKeys:pubs
                }
    case 'REMOVE_PUB_KEY':
        pubs = state.publicKeys
        pubs.splice(action.data,1)
        return { ...state,
                 publicKeys:pubs
                }
    default:
      return state
  }
}
