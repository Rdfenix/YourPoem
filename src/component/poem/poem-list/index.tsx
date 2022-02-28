import "./poem-list.css";
import React, { useState, useEffect } from "react";
import PoemCard from "../poem-card";
import { Poem } from "../../../shared/interface/poem";
import { sortAscending, sortDescendant } from "../../../shared/util/common";
import CardDetail from "../poem-card-detail";
import Loading from "../../../shared/component/loading";

interface Props {
  poems: Poem[];
  favorites: Poem[];
  loading: boolean;
}

const PoemList = ({ poems, favorites, loading }: Props) => {
  const alphabeticOrder = {
    aZ: "a-z",
    zA: "z-a",
  };

  const [poemList, setPoemList] = useState(poems);
  const [load, setLoad] = useState(loading);
  const [favoreitePoemList, setFavoreitePoemList] = useState(favorites);
  const [titleOrder, setTitleOrder] = useState(alphabeticOrder.aZ);
  const [authorOrder, setAuthorOrder] = useState(alphabeticOrder.aZ);

  const [showCardDetail, setShowCardDetail] = useState(false);
  const [poemData, setPoemData] = useState({
    title: "",
    author: "",
    lines: [],
  });

  useEffect(() => {
    setPoemList(poems);
    setFavoreitePoemList(favorites);
    setLoad(loading);
  }, [favorites, poems, loading]);

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

  function openCardDetail(data: { title: string; author: string }) {
    const result = poemList.find(
      (item) => item.author === data.author && item.title === data.title
    );
    const favoriteResult = favoreitePoemList.find(
      (item) => item.author === data.author && item.title === data.title
    );
    setShowCardDetail(true);

    const newData: any = {
      title: result ? result?.title : favoriteResult?.title,
      author: result ? result?.author : favoriteResult?.author,
      lines: result ? result?.lines : favoriteResult?.lines,
    };

    setPoemData(newData);
  }

  function closeCardDetail() {
    setShowCardDetail(false);
  }

  function poemsList(poemsData: Poem[]) {
    return poemsData.map((poem) => (
      <PoemCard
        key={poem.title}
        author={poem.author}
        title={poem.title}
        poem={poem.lines[0]}
        favorite={poem.favorite}
        handleCardDetail={openCardDetail}
      />
    ));
  }

  function favoristList(favoritePoemList: Poem[]) {
    return favoritePoemList.map((favorite) => (
      <PoemCard
        key={favorite.title}
        author={favorite.author}
        title={favorite.title}
        poem={favorite.lines[0]}
        favorite={favorite.favorite}
        handleCardDetail={openCardDetail}
      />
    ));
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
        {load && <Loading />}
        {!load && (
          <>
            {favoristList(favoreitePoemList)}
            {favoreitePoemList.length > 0 && <hr />}
            {poemsList(poemList)}
          </>
        )}
      </section>
      {showCardDetail && (
        <CardDetail
          author={poemData.author}
          title={poemData.title}
          lines={poemData.lines}
          openCard={showCardDetail}
          handleClose={closeCardDetail}
        />
      )}
    </>
  );
};

export default PoemList;
