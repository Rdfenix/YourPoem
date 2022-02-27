export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount?: string;
  favorite?: boolean;
}

export interface StateReducer {
  PoemReducer: Poem[];
  FavoritePoemReducer: Poem[];
}
