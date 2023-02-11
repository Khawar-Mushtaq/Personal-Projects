import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  popularGamesURL,
  upcommingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../../api/games_api";
import axios from "axios";

export const getPopularGamesList = createAsyncThunk(
  "games/getPopular",
  async (payload) => {
    const res = await axios.get(popularGamesURL());
    return res;
  }
);
export const getUpcommingGamesList = createAsyncThunk(
  "games/getUpcomming",
  async (payload) => {
    const res = await axios.get(upcommingGamesURL());
    return res;
  }
);
export const getNewGamesList = createAsyncThunk(
  "games/getNew",
  async (payload) => {
    const res = await axios.get(newGamesURL());
    return res;
  }
);
export const getSearchedList = createAsyncThunk(
  "games/getSearched",
  async (payload) => {
    const res = await axios.get(searchGameURL(payload));
    return res;
  }
);
