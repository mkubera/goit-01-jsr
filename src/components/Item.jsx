function Item({ id, name, isNew }) {
  return (
    <li>
      {name} ({id}) {isNew && "(NEW)"}
    </li>
  );
}

export default Item;
