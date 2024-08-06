import { createSlice } from "@reduxjs/toolkit";

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    memoList: [
      {
        id: 111,
        no: 0,
        name: "第一个任务",
        pt: "pdd",
        bj: 10,
        bjBack: false,
        yj: 20,
        yjBack: true,
        remark: "备注111111",
      },
      {
        id: 222,
        no: 1,
        name: "第er个任务",
        pt: "tb",
        bj: 12,
        bjBack: true,
        yj: 22,
        yjBack: true,
        remark: "备注22wedlskfalksdflka",
      },
    ],
  },
  reducers: {
    create(state, { payload }) {
      state.memoList.unshift({
        id: Date.now(),
        no: state.memoList.length,
        ...payload,
      });
    },
    remove(state, { payload }) {
      const index = state.memoList.findIndex((v) => v.id === payload);
      state.memoList.splice(index, 1);
    },
    update(state, { payload }) {
      const index = state.memoList.findIndex((v) => v.id === payload.id);
      state.memoList.splice(index, 1, payload);
    },
  },
});

export const { create, remove, update } = memoSlice.actions;
export default memoSlice.reducer;
