import React, { useState } from "react";
import style from "./AnswerSheet.module.scss";
import classNames from "classnames";

const AnswerSheet = (props) => {
  // 初始化存储每个问题的答案数组
  const [answers, setAnswers] = useState(props.answers);

  // "A", "B", "C", "D"选项字母数组
  const optionsLetters = ["A", "B", "C", "D"];

  // 点击实现选
  const handleSelect = (event, questionIndex, letter) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = letter;
    setAnswers(newAnswers); // 使用props传递的setAnswers
    props.setAnswers(newAnswers); // 确保App组件中的状态也更新
  };

  // 点击提交按钮
  const submit = () => {
    // 调用父组件App的setIsShow来显示弹窗
    props.submit();
  };

  return (
    <div className={style.examCon}>
      <p className={style.empty}></p>
      {/* 题目部分 */}
      {props.data.map((item, index) => (
        <div className={style.questionPaper} key={index}>
          <div className={style.question} id={`question-${index + 1}`}>
            <p className={style.questionNum}>{index + 1}</p>
            <div className={style.questionCon}>
              <h3>{item.question}</h3>
              <ul>
                {item.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionsLetters[optionIndex]} // 使用optionsLetters的索引来关联值
                      checked={answers[index] === optionsLetters[optionIndex]}
                      onChange={(event) =>
                        handleSelect(event, index, optionsLetters[optionIndex])
                      }
                      id={`question-${index}-${optionsLetters[optionIndex]}`}
                      disabled={props.isSubmitted}
                    />
                    <label
                      htmlFor={`question-${index}-${optionsLetters[optionIndex]}`}
                    >
                      {optionsLetters[optionIndex]}: {option}
                    </label>
                  </li>
                ))}
              </ul>
              {!props.correctness[index] && props.showResult && (
                <p className={style.remind}>
                  正确答案：{props.data[index].result}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* 提交按钮 */}
      <div className={style.submitCon}>
        <button
          className={classNames(style.submit, {
            [style.disabled]: props.isSubmitted, // 根据 isSubmitted 状态添加 disabled 类名
          })}
          onClick={submit}
          disabled={props.isSubmitted}
        >
          {props.isSubmitted ? "已交卷" : "交卷"}
        </button>
      </div>
    </div>
  );
};

export default AnswerSheet;
