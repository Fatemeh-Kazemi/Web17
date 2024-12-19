import "./App.css";

/*function App() {
}*/

const App = () => {
  let myName = "Amin";
  let student = [
    { name: "sara", family: "amini" },
    { name: "mina", family: "miladi"}
  ];

  return (
    <div className="App">
      <h1 className="text-primary">{myName}</h1>
      <p className="bg-danger">Hello World</p>
      {/* <p>Hello World</p> */}
      <hr />
      <img />
      {
        student.map(std=>(
          <p>{std.name}</p>
        ))
      }
    </div>
  );
};

export default App;
