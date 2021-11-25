import Item from "./Item";

function Items({ items }) {
  return (
    <ul>
      {items.length > 0 &&
        items
          // .filter((b, i) => i > 1)
          .reverse()
          .map(({ id, name, isNew }) => (
            <Item key={id} id={id} name={name} isNew={isNew} />
          ))}
    </ul>
  );
}

export default Items;
