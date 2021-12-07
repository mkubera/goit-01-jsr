import Item from "./Item";
import React, { useContext } from "react";
import { BooksContext } from "./../../utils/provider";

const Items = () => {
  const books = useContext(BooksContext).books;

  return (
    <ul>
      {books.length > 0 &&
        books
          .reverse()
          .map(({ id, name, isNew }) => (
            <Item key={id} id={id} name={name} isNew={isNew} />
          ))}
    </ul>
  );
};

export default Items;
