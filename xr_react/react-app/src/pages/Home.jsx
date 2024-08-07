/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAge, changeName } from '../store/features/userSlice'
import { bannerApi } from '../store/features/homeSlice'

const Home = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const banners = useSelector(state =>state.home.banners)
  const loading = useSelector(state => state.home.loading)
  console.log(banners)

  const add = () => {
    dispatch(addAge(2))
  }

  useEffect(() => {
    dispatch(bannerApi())
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>姓名：{user.name}</p>
      <input type="text" value={user.name} onChange={(e) => {
        dispatch(changeName(e.target.value))
      }} />
      <p>年龄：{user.age}</p>
      <button onClick={add}>age +</button>
      <hr />
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

export default Home