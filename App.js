import App1 from "./App1";
import Data from "./Data";

const App = () => {
  return (
    <section className="omen">
      {Data.map((eachObj) => {
        const { id, title, thumbnailUrl, url } = eachObj;
        return (
          <App1 id={id} title={title} url={url} thumbnailUrl={thumbnailUrl} />
        );
      })}
      <App1 />
    </section>
  );
};

export default App;
