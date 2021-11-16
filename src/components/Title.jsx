const Title = ({ color = "green", title, subtitle }) => {
  return (
    <>
      <h1 style={{ color }}>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default Title;
