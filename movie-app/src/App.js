import Card from "./components/cards/Card";
import Collapse from "./components/cards/Collapse";

import './App.css';

function App() {
  return (
    <div className="App container">

    <div className="row">

      <div className="card-deck w-100">
        <div className="col">
            <Collapse href="collapseExample1" >
              <Card cardTitle="Card I" 
              cardtext="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              img="https://picsum.photos/id/1031/200/300" 
              updateTime="Last updated 5 mins ago"/>
            </Collapse>
        </div>
        <div className="col">
            <Collapse href="collapseExample2">
              <Card cardTitle="Card II" 
              cardtext="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              img="https://picsum.photos/id/10/200/300" 
              updateTime="Last updated 3 mins ago"/>
            </Collapse>
        </div>
        <div className="col">
          <Collapse href="collapseExample3">
             <Card cardTitle="Card III" 
             cardtext="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
             img="https://picsum.photos/id/1031/200/300" 
             updateTime="Last updated 5 mins ago"/>
          </Collapse>
        </div>
      </div>
</div>
    </div>
  );
}

export default App;