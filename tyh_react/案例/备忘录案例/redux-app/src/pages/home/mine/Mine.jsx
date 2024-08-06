import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Mine = () => {
  const memoList = useSelector((state) => state.memo.memoList);
  const total = useMemo(() => {
    const t = {
      bj1: 0,
      bj2: 0,
      yj1: 0,
      yj2: 0,
    };
    memoList.forEach((it) => {
      if (it.bjBack) {
        t.bj1 += it.bj;
      } else {
        t.bj2 += it.bj;
      }
      if (it.yjBack) {
        t.yj1 += it.yj;
      } else {
        t.yj2 += it.yj;
      }
    });
    return t;
  }, [memoList]);
  return (
    <div>
      <div>
        <h3>{total.bj1}</h3>
        <p>本金已返</p>
      </div>
      <div>
        <h3>{total.bj2}</h3>
        <p>本金未返</p>
      </div>
      <div>
        <h3>{total.yj1}</h3>
        <p>佣金已返</p>
      </div>
      <div>
        <h3>{total.yj2}</h3>
        <p>佣金未返</p>
      </div>
    </div>
  );
};

export default Mine;
