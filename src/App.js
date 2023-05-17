import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1001/200/200",
];

function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-3">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((item) => {
            return (
              <>
                <Card src={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
