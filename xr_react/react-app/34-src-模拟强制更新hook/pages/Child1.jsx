/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// 路由跳转hook
import { useNavigate } from 'react-router-dom'

const Child1 = () => {

  const [list, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://zyxcl.xyz/music/api/top/playlist/highquality').then(res => res.json())
      .then(res => {
        // console.log(res.playlists)
        setList(res.playlists)
      })
  }, [])

  const goDetail = (id) => {
    // navigate(`/detail?id=${id}`)
    // 动态路由跳转
    // navigate(`/detail/${id}`)
    // 下个页面只能通过当前页面跳转才能用state传参，单独打开页面没有state
    navigate(`/detail/${id}`, {
      state: {
        abc: 123
      }
    })
  }

  return (
    <div>
      {list.map(item => 
        <div key={item.id} onClick={() => goDetail(item.id)}>
          <h3>{item.name}</h3>
          <img src={item.coverImgUrl} width={100} alt="" />
          <p>{item.description}</p>
        </div>
      )}
    </div>
  )
}

export default Child1