import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/index";
import dayjs from "dayjs";

interface ItodoSlice {
  list: ITodo[];
}

const initState: ItodoSlice = {
  list: [
    {
      id: 1,
      text: 'buy porshe',
      completed: false,
      date: dayjs().format('dddd, MMMM D, YYYY h:mm A'),
    },
    {
      id: 2,
      text: 'buy cadillac',
      completed: true,
      date: dayjs().format('dddd, MMMM D, YYYY h:mm A'),
    },
    {
      id: 3,
      text: 'buy toyota',
      completed: false,
      date: dayjs().format('dddd, MMMM D, YYYY h:mm A'),
    }
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    addTodo(state, action){
      const newTodo: ITodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        date: dayjs().format('dddd, MMMM D, YYYY h:mm A'),
      };
      state.list.unshift(newTodo)
    },
    removeTodo(state, action){
      state.list = state.list.filter((item) => item.id != action.payload)
    },
    updateStatus(state, action){
      state.list = state.list.map((item) => {
        if(item.id == action.payload){
          return{
            ...item,
            completed: !item.completed,
          }
        }
        return item;
      })
    }
  },
});

export const { addTodo, removeTodo, updateStatus } = todoSlice.actions;