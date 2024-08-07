/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bannerApi } from '../store/features/homeSlice'

const About = () => {

  const dispatch = useDispatch()
  const banners = useSelector(state => state.home.banners)
  const loading = useSelector(state => state.home.loading)

  useEffect(() => {
    dispatch(bannerApi())
  }, [])

  return (
    <div>
      <h1>About</h1>
      <ul>
        {banners.map(item => 
          <li key={item.targetId}>
            <img src={item.imageUrl} width={300} alt="" />
          </li>
        )}
      </ul>
      {loading && <div className='loading'>加载中</div>}
    </div>
  )
}

export default About