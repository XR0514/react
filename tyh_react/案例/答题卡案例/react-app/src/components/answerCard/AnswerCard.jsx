import React, { useState, useEffect, useRef } from "react";
import style from "./AnswerCard.module.scss";
import classNames from "classnames";

const AnswerCard = (props) => {
  // 状态用于控制是否吸顶
  const [isSticky, setIsSticky] = useState(false);
  // 创建 answerRef
  const answerRef = useRef(null);
  // 状态用于存储倒计时的时间（毫秒）
  const [timeLeft, setTimeLeft] = useState(7200000); // 初始时长为7200000毫秒（2小时）
  // 对象解构 data answer
  const { data, answers } = props;

  // 设置答题卡吸顶效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // 组件卸载时移除事件监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 根据 isSticky 状态设置样式
  const stickyStyle = isSticky
    ? { position: "fixed", top: 0, right: 132 }
    : { position: "static" };

  // 设置答题卡倒计时效果
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1000);
      } else {
        clearInterval(timer);
        props.submit(); // 时间耗尽时自动交卷
      }
    }, 1000);
    // 组件卸载时清除定时器
    return () => {
      clearInterval(timer);
    };
    // 依赖项为timeLeft
  }, [timeLeft]);

  // 格式化时间函数
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={style.answer} style={stickyStyle} ref={answerRef}>
      <div className={style.answerTop}>
        <i className={style.answerPaper}>答题卡</i>
        <span className={style.time}>{formatTime(timeLeft)}</span>
      </div>
      <div className={style.answerPart}>
        {props.data.map((item, index) => (
          <button
            key={index}
            // 使用classnames来动态绑定类名
            className={classNames({
              [style.checked]: props.answers[index], // 选中状态类名
              [style.true]: props.correctness[index] === true, // 正确答案类名
              [style.false]: !props.correctness[index] && props.showResult, // 错误答案类名
            })}
            onClick={() => props.onClickItem(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
