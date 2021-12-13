function App() {
  return (
    /** CALCULATOR CONTAINER **/
    <div className="calculator-grid">
      {/* OUTPUT SECTION */}
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>

      {/* BUTTON GRID */}
      <button className="span-two">AC</button>
      <button>DEL</button>
    </div>
  );
}

export default App;
