import React, { useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import style from './Detail.module.scss'
import { remove, update } from '../../store/reducers/memo'
import classNames from 'classnames'
const enumPt = {
  pdd: '拼多多',
  tb: '淘宝',
  jd: '京东'
}

const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const info = useSelector(state => {
    return state.memo.memoList.find(v => v.id === Number(params.id)) || {}
  })
  const [copyInfo, setCopyInfo] = useState({...info})

  const del = () => {
    if (window.confirm('确定要删除吗？')) {
      dispatch(remove(info.id))
      window.history.back()
    }
  }

  const save = () => {
    dispatch(update(copyInfo))
    window.history.back()
  }

  return (
    <div className={style.detail}>
      <p className={style.no}>第 {copyInfo?.no} 个任务</p>
      <div className={style.content}>
        <div className={style.title}>
          <b>{copyInfo?.name}</b>
          <span>{enumPt[copyInfo?.pt]}</span>
        </div>
        <div className={style.money}>
          <div>支付本金 {copyInfo.bj} 元</div>
          <div className={style.switch}>
            {copyInfo.bjBack ? '已返' : '未返'}
            <p className={classNames({ [style.active]: copyInfo.bjBack })} onClick={() => {
              setCopyInfo({
                ...copyInfo,
                bjBack: !copyInfo.bjBack
              })
            }}><span></span></p>
          </div>
        </div>
        <div className={style.money}>
          <div>支付佣金 {copyInfo.yj} 元</div>
          <div className={style.switch}>
            {copyInfo.yjBack ? '已返' : '未返'}
            <p className={classNames({ [style.active]: copyInfo.yjBack })} onClick={() => {
              setCopyInfo({
                ...copyInfo,
                yjBack: !copyInfo.yjBack
              })
            }}><span></span></p>
          </div>
        </div>
      </div>
      <button onClick={save}>保存</button>
      <button onClick={del}>删除</button>
    </div>
  )
}

export default Detail