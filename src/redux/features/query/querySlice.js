const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  category: "CPU/Processor",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    searchCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { searchCategory } = querySlice.actions;
export default querySlice.reducer;
