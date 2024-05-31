import Application from "./components/application/Application";
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";
import { Users } from "./components/users/Users";

function App() {
  const renderTillSection5 = () => (
    <div className="App">
      <Application />
      <hr />
      <Skills skills={["HTML", "CSS"]} />

      <hr />
      <Counter />
      <hr/>
      <Users />
    </div>
  );

  // const renderSection6 = () => (
  //   <AppProviders>
  //     <div className="App">
  //       <MuiMode />
  //       </div>
  //   </AppProviders>
  // );

  
  return (
     renderTillSection5()
  //  renderSection6()
  );

}

export default App;
