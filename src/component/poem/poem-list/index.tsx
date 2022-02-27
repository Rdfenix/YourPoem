import "./poem-list.css";
import React, { useState, useEffect } from "react";
import PoemCard from "../poem-card";
import { Poem } from "../../../shared/interface/poem";
import { sortAscending, sortDescendant } from "../../../shared/util/common";

interface Props {
  poems: Poem[];
  favorites: Poem[];
}

const PoemList = ({ poems, favorites }: Props) => {
  const alphabeticOrder = {
    aZ: "a-z",
    zA: "z-a",
  };

  const [poemList, setPoemList] = useState(poems);
  const [favoreitePoemList, setFavoreitePoemList] = useState(favorites);
  const [titleOrder, setTitleOrder] = useState(alphabeticOrder.aZ);
  const [authorOrder, setAuthorOrder] = useState(alphabeticOrder.aZ);

  useEffect(() => {
    setPoemList(poems);
    setFavoreitePoemList(favorites);
  }, [favorites, poems]);

  function sortTitle() {
    if (poems.length || favorites.length) {
      const arrayOfPoems = poems;
      const arrayOfFavorites = favorites;

      if (titleOrder === alphabeticOrder.aZ) {
        setTitleOrder(alphabeticOrder.zA);

        arrayOfPoems.sort((a, b) => sortDescendant(a, b, "title"));
        arrayOfFavorites.sort((a, b) => sortDescendant(a, b, "title"));
        return;
      }

      if (titleOrder === alphabeticOrder.zA) {
        setTitleOrder(alphabeticOrder.aZ);

        arrayOfPoems.sort((a, b) => sortAscending(a, b, "title"));
        arrayOfFavorites.sort((a, b) => sortAscending(a, b, "title"));
        return;
      }
    }
  }

  function sortAuthor() {
    if (poems.length || favorites.length) {
      const arrayOfPoems = poems;
      const arrayOfFavorites = favorites;

      if (authorOrder === alphabeticOrder.aZ) {
        setAuthorOrder(alphabeticOrder.zA);

        arrayOfPoems.sort((a, b) => sortDescendant(a, b, "author"));
        arrayOfFavorites.sort((a, b) => sortDescendant(a, b, "author"));

        return;
      }

      if (authorOrder === alphabeticOrder.zA) {
        setAuthorOrder(alphabeticOrder.aZ);

        arrayOfPoems.sort((a, b) => sortAscending(a, b, "author"));
        arrayOfFavorites.sort((a, b) => sortAscending(a, b, "author"));

        return;
      }
    }
  }

  return (
    <>
      <div className="header-of-list">
        <div className="sortable-items">
          <div className="title-area" onClick={() => sortTitle()}>
            <span>Title</span>
          </div>
          <div className="author-area" onClick={() => sortAuthor()}>
            <span>Author</span>
          </div>
        </div>
      </div>
      <section className="poems-area">
        {favoreitePoemList.map((favorite) => (
          <PoemCard
            key={favorite.title}
            author={favorite.author}
            title={favorite.title}
            poem={favorite.lines[0]}
            favorite={favorite.favorite}
          />
        ))}
        {favoreitePoemList.length > 0 && <hr />}
        {poemList.map((poem) => (
          <PoemCard
            key={poem.title}
            author={poem.author}
            title={poem.title}
            poem={poem.lines[0]}
            favorite={poem.favorite}
          />
        ))}
      </section>
    </>
  );
};

export default PoemList;
