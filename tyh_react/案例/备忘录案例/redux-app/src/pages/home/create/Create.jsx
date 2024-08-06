import React, { useState } from "react";
import style from "./Create.module.scss";
import { useDispatch } from "react-redux";
import { create } from "../../../store/reducers/memo";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pt: "",
    name: "",
    bj: "",
    bjBack: false,
    yj: "",
    yjBack: false,
    remark: "",
  });
  const changeForm = (key, val) => {
    setForm({ ...form, [key]: val });
  };
  const submit = () => {
    if (!form.pt || !form.name) {
      alert("请输入任务名称和平台");
      return;
    }
    dispatch(create(form));
    alert("创建成功");
    navigate("/memo");
  };
  return (
    <div className={style.create}>
      <div className={style.row}>
        <span>平台</span>
        <div className={style.formItem}>
          <input
            type="radio"
            name="pt"
            value="tb"
            onChange={(e) => changeForm("pt", e.target.value)}
          />
          淘宝
          <input
            type="radio"
            name="pt"
            value="jd"
            onChange={(e) => changeForm("pt", e.target.value)}
          />
          京东
          <input
            type="radio"
            name="pt"
            value="pdd"
            onChange={(e) => changeForm("pt", e.target.value)}
          />
          拼多多
        </div>
      </div>
      <div className={style.row}>
        <span>任务</span>
        <div className={style.formItem}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => changeForm("name", e.target.value)}
          />
        </div>
      </div>
      <div className={style.row}>
        <span>本金</span>
        <div className={style.formItem}>
          <input
            type="number"
            value={form.bj}
            onChange={(e) => changeForm("bj", Number(e.target.value))}
          />{" "}
          元
          <input
            type="checkbox"
            checked={form.bjBack}
            onChange={(e) => changeForm("bjBack", e.target.checked)}
          />{" "}
          本金已返
        </div>
      </div>
      <div className={style.row}>
        <span>佣金</span>
        <div className={style.formItem}>
          <input
            type="number"
            value={form.yj}
            onChange={(e) => changeForm("yj", Number(e.target.value))}
          />{" "}
          元
          <input
            type="checkbox"
            checked={form.yjBack}
            onChange={(e) => changeForm("yjBack", e.target.checked)}
          />{" "}
          佣金已返
        </div>
      </div>
      <div className={style.row}>
        <span>备注</span>
        <div className={style.formItem}>
          <textarea
            placeholder="请输入备注"
            value={form.remark}
            onChange={(e) => changeForm("remark", e.target.value)}
          />
        </div>
      </div>
      <button onClick={submit}>提交</button>
    </div>
  );
};

export default Create;
