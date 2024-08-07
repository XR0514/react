/* eslint-disable no-unused-vars */
import React, { useContext, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import style from './TopicList.module.scss'
import ctx from '../../context'

const TopicList = (props, parentRef) => {

  const ctxVal = useContext(ctx)
  const itemRef = useRef(null)

  const result = (e, index) => {
    const newResult = [...ctxVal.result]
    newResult[index] = e.target.value
    ctxVal.setResult(newResult)
  }

  useImperativeHandle(parentRef, () => {
    return {
      itemRef
    }
  })

  return (
    <div ref={itemRef}>
      {
        ctxVal.list.map((item, index) => {
          return <div className={style.topic} key={index} >
                    <span className={style.topicNum}>{index + 1}</span>
                    <span className={style.topicScore}>（{item.score}分）</span>
                    <span className={style.topicName}>{item.question}</span>
                    <div className={style.topicOption}>
                      {
                        [...Array(4).keys()].map(v => {
                          return <p key={v}>
                                  <input 
                                    type="radio"
                                    id={`${index}-${v}`}
                                    name={index}
                                    value={v === 0 ? 'A' : v === 1 ? 'B' : v === 2 ? 'C' : 'D'}
                                    onChange={(e) => result(e, index)}
                                    disabled={ctxVal.showResult}
                                  />
                                    {v === 0 ? 'A' : v === 1 ? 'B' : v === 2 ? 'C' : 'D'}
                                    <label htmlFor={`${index}-${v}`}>{item.options[v]}</label>
                                  </p>
                        })
                      }
                      
                    </div>
                    {ctxVal.showResult && <p className={item.isCorrect === false ? [style.red] : [style.green]}>正确答案：{item.result}</p>}
                  </div>
        })
      }
    </div>
  )
}

export default forwardRef(TopicList)