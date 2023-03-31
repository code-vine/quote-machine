import './App.css';

function App(props) {
  props.click(new Event("click"));
  return (
    <div id="quote-box" className="quote-box">
      <p id="text" className="text-colored"></p>
      <p id="author" className="text-colored"></p>
      <div className="row">
        <div className="col-md-2">
          <a className="btn btn-primary colored" href="twitter.com/intent/tweet" target="_blank" id="tweet-quote"><i className="bi bi-twitter"></i></a>
        </div>
        <div className="col-md-4">
          <button onClick={props.click} className="btn btn-primary colored" id="new-quote">New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
