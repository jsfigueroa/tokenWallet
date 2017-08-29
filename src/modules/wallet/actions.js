export const ADD_PRIV_KEY='ADD_PRIV_KEY';
export const addPrivKey = (data) => {
  return {
    type: ADD_PRIV_KEY,
    data
  }
}

export const ADD_PUB_KEY='ADD_PUB_KEY';
export const addPubKey = (data) => {
  return {
    type: ADD_PUB_KEY,
    data: data
  }
}

export const REMOVE_PUB_KEY='REMOVE_PUB_KEY';
export const removePubKey = (data) => {
  return {
    type: REMOVE_PUB_KEY,
    data: data
  }
}
