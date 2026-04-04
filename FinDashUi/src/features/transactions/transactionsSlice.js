import { createSlice } from "@reduxjs/toolkit";
import { transactions as initialTransactions } from "../../mockdata/transactions";


const savedTransactions =
  localStorage.getItem("transactions");

const transactionsSlice = createSlice({

  name: "transactions",

  initialState: {

    list: savedTransactions
      ? JSON.parse(savedTransactions)
      : initialTransactions,

    searchTerm: "",

    filterType: "all",

    sortOrder: "newest"

  },

  reducers: {

    addTransaction: (state, action) => {

      state.list.unshift(action.payload);

      localStorage.setItem(
        "transactions",
        JSON.stringify(state.list)
      );

    },


    deleteTransaction: (state, action) => {

      state.list = state.list.filter(
        (t) => t.id !== action.payload
      );

      localStorage.setItem(
        "transactions",
        JSON.stringify(state.list)
      );

    },


    setSearchTerm: (state, action) => {

      state.searchTerm = action.payload;

    },


    setFilterType: (state, action) => {

      state.filterType = action.payload;

    },


    setSortOrder: (state, action) => {

      state.sortOrder = action.payload;

    },

    updateTransaction: (state, action) => {

        const index = state.list.findIndex(
          (t) => t.id === action.payload.id
        );
      
        if (index !== -1) {
      
          state.list[index] = action.payload;
      
        }
      
        localStorage.setItem(
          "transactions",
          JSON.stringify(state.list)
        );
      
      },

  }

});


export const {

  addTransaction,
  deleteTransaction,
    updateTransaction,
  setSearchTerm,
  setFilterType,
  setSortOrder

} = transactionsSlice.actions;


export default transactionsSlice.reducer;