/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// useLocation: 获取路由url的信息的hook
// useSearchParams: 获取search参数信息
// useParams: 动态路由参数获取
import { useLocation, useSearchParams, useParams } from 'react-router-dom'

const Details = () => {

  const location = useLocation()
  // 可以修改
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get('id'))
  console.log(location)
  const params = useParams()

  const [item, setItem] = useState()

  useEffect(() => {
    // fetch(`https://zyxcl.xyz/music/api/playlist/detail?id=${searchParams.get('id')}`).then(res => res.json())
    //   .then(res => {
    //     console.log(res.playlist)
    //     setItem(res.playlist)
    //   })

      fetch(`https://zyxcl.xyz/music/api/playlist/detail?id=${params.id}`).then(res => res.json())
      .then(res => {
        console.log(res.playlist)
        setItem(res.playlist)
      })
  }, [location])

  return (
    <div className='detail'>
      <button onClick={() => {
        setSearchParams('id=6655442283')
      }}>修改id</button>
      <h3>{item?.name}</h3>
      <p>更新时间：{new Date(item?.createTime).toLocaleString()}</p>
      <img src={item?.coverImgUrl} width={100} alt="" />
      <p>{item?.description}</p>
    </div>
  )
}

export default Details