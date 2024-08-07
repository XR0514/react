/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import AnswerCard from './components/answerCard/AnswerCard'
import Result from './components/result/Result'
import TopicList from './components/topicList/TopicList'
import axios from 'axios'
import style from './App.module.scss'
import { Provider } from './context'
import { useCountDown } from './hook/countDown'
// 将元素渲染到其他位置
import { createPortal } from 'react-dom'


const App = () => {
  const [list, setList] = useState([])  // 题目列表
  const [titTotal, setTitTotal] = useState(0)  // 题目总分
  const [result, setResult] = useState(new Array(list.length))  // 选择的结果数组
  const [totalScore, setTotalScore] = useState(0)  // 结果总分
  const [show, setShow] = useState(false)  // 是否显示结果弹窗
  const [showResult, setShowResult] = useState(false)  // 是否展示答案
  const { count, stop, start } = useCountDown(20)  // 引入倒计时hook
  const topicRef = useRef(null)  // 获取题目组件元素

  // 调接口
  const getData = async () => {
    const res = await axios.get('https://zyxcl.xyz/exam_api/exan_data')
    console.log(res.data)
    setList(res.data)
  }
  useEffect(() => {
    getData()
    setShowResult(false)
    start()
  }, [])

  useEffect(() => {
    // 倒计时结束，强制提交
    if (count === 0) {
      stop()
      submit()
    }
  }, [count])

  // 总分
  useEffect(() => {
    // if (Array.isArray(list) && list.length > 0) {
      const totalValue = list.reduce((prev, cur) => prev + cur.score, 0)
      setTitTotal(totalValue)
    // }
  }, [list])

  // 点击提交
  const submit = () => {
    setShowResult(true)
    setShow(true)
    stop()
    list.forEach((item, i) =>{
      if (item.result === result[i]){
        setTotalScore(n => n + item.score)
      } else {
        const updatedList = list.map(listItem => {
          if (listItem === item) {
            listItem.isCorrect = false
          }
          return listItem
        })
        setList(updatedList)
      }
    })
  }

  // 点击题号，跳转到相应的题目
  const jumpTopic = (index) => {
    document.documentElement.scrollTop = topicRef.current.itemRef.current.children[index].offsetTop
  }
  
  return (
    <Provider value={{list, result, setResult, totalScore, setTotalScore, showResult, setShow, count, jumpTopic}}>
      <div className={style.box}>
        <h3>单选题（共{list.length}题，总共{titTotal}分）</h3>
        <AnswerCard></AnswerCard>
        <TopicList ref={topicRef}></TopicList>
        {/* 将弹窗渲染到body上面，第一个参数为子元素，第二个参数为父元素 */}
        {show && createPortal(<Result></Result>, document.body)}
        <button className={style.submit} onClick={submit} disabled={showResult}>{showResult ? '已交卷' : '提交'}</button>
      </div>
    </Provider>
  )
}

export default App