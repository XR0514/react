/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import style from './Result.module.scss'
import ctx from '../../context'

const Result = () => {

  const ctxVal = useContext(ctx)

  const confirm = () => {
    ctxVal.setShow(false)
    ctxVal.setTotalScore(0)
  }

  return (
    <div className={style.wrap}>
      <div className={style.wrapCon}>
        <p>你的得分是：<span className={style.score}>{ctxVal.totalScore}</span></p>
        <button className={style.confirm} onClick={confirm}>确定</button>
      </div>
    </div>
  )
}

export default Result