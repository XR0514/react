/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef } from 'react'
import style from './AnswerCard.module.scss'
import CountDown from './countDown/CountDown'
import ctx from '../../context'
import classNames from 'classnames'

const AnswerCard = () => {
  const ctxVal = useContext(ctx)

  const jump = (index) => {
    ctxVal.jumpTopic(index)
  }

  return (
    <div className={style.answerCard} >
      <div className={style.tit}>
        <h3>答题卡</h3>
        <CountDown></CountDown>
      </div>
      <div className={style.topicOrder}>
        {
          ctxVal.list.map((item, index) => {
            return <span
                    key={index}
                    className={classNames({[style.spanRed]: ctxVal.showResult && item.isCorrect === false}, {[style.spanBlue]: ctxVal.result[index] && !ctxVal.showResult})}
                    onClick={() => jump(index)}>{index + 1}
                  </span> 
          })
        }
      </div>
    </div>
  )
}

export default AnswerCard