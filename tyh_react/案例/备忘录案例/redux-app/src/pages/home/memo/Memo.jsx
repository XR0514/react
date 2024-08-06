import React from "react";
import { useSelector } from "react-redux";
import style from "./Memo.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Memo = () => {
  const navigate = useNavigate();
  const memoList = useSelector((state) => state.memo.memoList);

  return (
    <div className={style.memo}>
      {memoList.length === 0 ? (
        <div className={style.empty}>
          <p>还没有任务，快去新建吧</p>
          <Link to="/create">去新建</Link>
        </div>
      ) : (
        memoList.map((it) => (
          <div
            className={style.row}
            key={it.id}
            onClick={() => navigate(`/detail/${it.id}`)}
          >
            <h3>{it.name}</h3>
            <p>
              本金：{it.bj} 佣金：{it.yj}
            </p>
            <p>{new Date(it.id).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Memo;
