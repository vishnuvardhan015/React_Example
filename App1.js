const App1 = (props) => {
  const { url, title, thumbnailUrl } = props;
  return (
    <section className="omen4">
      <img className="omen1" src={url} alt="Java Script" />
      <h2 className="omne2">{title}</h2>
      <a className="omen3" href={thumbnailUrl}>
        App-Details
      </a>
    </section>
  );
};

export default App1;
