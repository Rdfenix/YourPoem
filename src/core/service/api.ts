import axios from "axios";
import { Poem } from "../../shared/interface/poem";

export const API = axios.create({
  baseURL: "https://poetrydb.org/",
});

export const getPoems = () => API.get<Poem[]>("random/20");
