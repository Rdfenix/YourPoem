import "./poem-list.css";
import React, { useState, useEffect } from "react";
import PoemCard from "../poem-card";
import { Poem } from "../../../shared/interface/poem";

interface Props {
  poems: Poem[];
}

const PoemList = ({ poems }: Props) => {
  const alphabeticOrder = {
    aZ: "a-z",
    zA: "z-a",
  };

  const [poemList, setPoemList] = useState(poems);
  const [titleOrder, setTitleOrder] = useState(alphabeticOrder.aZ);
  const [authorOrder, setAuthorOrder] = useState(alphabeticOrder.aZ);

  useEffect(() => {
    setPoemList(poems);
  }, [poems]);

  function sortTitle() {
    if (poems.length) {
      const arrayOfPoems = poems;

      if (titleOrder === alphabeticOrder.aZ) {
        setTitleOrder(alphabeticOrder.zA);

        arrayOfPoems.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }

          return 0;
        });

        return;
      }

      if (titleOrder === alphabeticOrder.zA) {
        setTitleOrder(alphabeticOrder.aZ);

        arrayOfPoems.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }

          return 0;
        });

        return;
      }
    }
  }

  function sortAuthor() {
    if (poems.length) {
      const arrayOfPoems = poems;

      if (authorOrder === alphabeticOrder.aZ) {
        setAuthorOrder(alphabeticOrder.zA);

        arrayOfPoems.sort((a, b) => {
          if (a.author < b.author) {
            return 1;
          }
          if (a.author > b.author) {
            return -1;
          }

          return 0;
        });

        return;
      }

      if (authorOrder === alphabeticOrder.zA) {
        setAuthorOrder(alphabeticOrder.aZ);

        arrayOfPoems.sort((a, b) => {
          if (a.author > b.author) {
            return 1;
          }
          if (a.author < b.author) {
            return -1;
          }

          return 0;
        });

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
        {poemList.map((poem) => (
          <PoemCard
            key={poem.title}
            author={poem.author}
            title={poem.title}
            poem={poem.lines[0]}
          />
        ))}
      </section>
    </>
  );
};

export default PoemList;
