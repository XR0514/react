import React from "react";
import style from "./AnswerPopup.module.scss";
// import myImage from '../../assets/恭喜.webp'

const AnswerPopup = (props) => {
  const alertClass = props.isVisible ? "" : style.hidden;
  return (
    <div className={`${style.gradeAlert} ${alertClass}`}>
      <div className={style.grade}>
        <img src="../../../public/恭喜.webp" alt="再接再厉" />
        <h1>您的分数为</h1>
        <span className={style.score}>{props.totalScore}</span>
        <button className={style.confirm} onClick={props.onConfirm}>
          确认
        </button>
      </div>
    </div>
  );
};

export default AnswerPopup;
