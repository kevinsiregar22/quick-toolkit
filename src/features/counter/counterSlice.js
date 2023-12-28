import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = Math.max(0, state.value - 1);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    resetCount: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
