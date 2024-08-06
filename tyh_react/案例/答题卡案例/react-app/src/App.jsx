import React, { useState, useEffect, useRef } from "react";
import style from "./App.module.scss";
import AnswerSheet from "./components/answerSheet/AnswerSheet";
import AnswerCard from "./components/answerCard/AnswerCard";
import AnswerPopup from "./components/answerPopup/AnswerPopup";

const App = () => {
  // 获取数据
  const [data, setData] = useState([]);
  // 计算总分
  const [sum, setSum] = useState(0);
  // 存储每个问题的答案数组
  const [answers, setAnswers] = useState(new Array(data.length).fill(""));
  // 显示弹窗显示隐藏
  const [isShow, setIsShow] = useState(false);
  // 弹窗计算最后得分
  const [totalScore, setTotalScore] = useState(0);
  // 标记每个题目的正确性
  const [correctness, setCorrectness] = useState(
    new Array(data.length).fill(null)
  ); // 使用null表示未判断
  // 初始一个控制显示点击后 false 类名的变量
  const [showResult, setShowResult] = useState(false);
  // 初始一个控制显示点击后禁用按钮的变量
  const [isSubmitted, setIsSubmitted] = useState(false);
  // 初始时长为7200000毫秒（2小时）
  const [timeLeft, setTimeLeft] = useState(7200000);
  const timerID = useRef(null); // 使用ref来存储定时器ID

  // 获取数据
  const fetchData = async () => {
    const res = await fetch("https://zyxcl.xyz/exam_api/exan_data").then(
      (res) => res.json()
    );
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    fetchData();
    setShowResult(false);
  }, []);

  // 计算总分
  useEffect(() => {
    if (data.length > 0) {
      const sum = data.reduce((prev, curr) => prev + curr.score, 0);
      setSum(sum);
    }
  }, [data]); // 依赖项为data

  // 点击答题卡按钮跳转题目
  const onClickItem = (index) => {
    const questionElement = document.getElementById(`question-${index + 1}`);
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 清除定时器的方法
  const clearTimer = () => {
    if (timerID.current) {
      clearInterval(timerID.current);
      timerID.current = null;
    }
    setTimeLeft(0); // 设置时间显示为00:00:00
  };

  // 显示成绩弹窗
  const submit = () => {
    let totalScore = 0;
    let newCorrectness = answers.map((answer, index) => {
      return answer === data[index].result; // 根据答案和正确结果判断正确性
    });

    newCorrectness.forEach((correct, index) => {
      if (correct) {
        totalScore += data[index].score; // 如果答案正确，累加分数
      }
    });

    // 提交后禁用按钮
    setIsSubmitted(true);
    setShowResult(true);
    setIsShow(true);
    setTotalScore(totalScore);
    // 更新答案正确性状态
    setCorrectness(newCorrectness);

    // 清除定时器
    clearTimer();
  };

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  // 关闭弹窗的
  const closePopup = () => {
    setIsShow(false);
  };

  return (
    <div className={style.box}>
      <div className={style.title}>
        <h3>
          单选题 (共{data.length}题,共计{sum}分)
        </h3>
      </div>
      {/* 试卷 */}
      <AnswerSheet
        data={data}
        answers={answers}
        setAnswers={setAnswers}
        submit={submit}
        isSubmitted={isSubmitted}
        showResult={showResult}
        correctness={correctness}
      />
      {/* 答题卡 */}
      <AnswerCard
        data={data}
        answers={answers}
        onClickItem={onClickItem}
        correctness={correctness}
        showResult={showResult}
        timeLeft={timeLeft}
      />
      {/* 答题弹窗 */}
      {isShow && (
        <AnswerPopup
          isVisible={isShow}
          onConfirm={closePopup}
          totalScore={totalScore}
        />
      )}
    </div>
  );
};

export default App;
