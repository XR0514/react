// 管理所有的action

export const setBannerAction = dispatch => {
  fetch('https://zyxcl.xyz/music/api/banner').then(res => res.json())
    .then(res => {
      // console.log(res.banners)
      dispatch({
        type: 'SET_BANNER',
        payload: res.banners
      })
    })
}

export const setAgeAction = payload => {
  return {
    type: 'CHANGE_AGE',
    payload
  }
}

