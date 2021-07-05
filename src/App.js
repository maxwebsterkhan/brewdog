import { useEffect } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion";

function App() {


  return (
    <div className="App">
      <Accordion title="A">
        <span className="accordion-text">
          Morbi faucibus nunc et faucibus fermentum. Quisque dapibus nunc id
          varius ullamcorper. Vestibulum nec tristique felis. Morbi vel massa
          iaculis, condimentum eros at, feugiat dui. Nullam nec dolor vitae nisl
          commodo porta. Sed ut sagittis turpis. Nam pellentesque erat purus, et
          maximus risus pellentesque sed. Mauris pharetra felis odio, ut blandit
          tellus vestibulum et. Proin vulputate quam sed tincidunt luctus.
        </span>
      </Accordion>
      <Accordion title="B">
        <span className="accordion-text">
          Morbi faucibus nunc et faucibus fermentum. Quisque dapibus nunc id
          varius ullamcorper. Vestibulum nec tristique felis. Morbi vel massa
          iaculis, condimentum eros at, feugiat dui. Nullam nec dolor vitae nisl
          commodo porta. Sed ut sagittis turpis. Nam pellentesque erat purus, et
          maximus risus pellentesque sed. Mauris pharetra felis odio, ut blandit
          tellus vestibulum et. Proin vulputate quam sed tincidunt luctus.
        </span>
      </Accordion>
      <Accordion title="C">
        <span className="accordion-text">
          Morbi faucibus nunc et faucibus fermentum. Quisque dapibus nunc id
          varius ullamcorper. Vestibulum nec tristique felis. Morbi vel massa
          iaculis, condimentum eros at, feugiat dui. Nullam nec dolor vitae nisl
          commodo porta. Sed ut sagittis turpis. Nam pellentesque erat purus, et
          maximus risus pellentesque sed. Mauris pharetra felis odio, ut blandit
          tellus vestibulum et. Proin vulputate quam sed tincidunt luctus.
        </span>
      </Accordion>
    </div>
  );
}

export default App;
