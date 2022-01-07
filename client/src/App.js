import "./App.css";
import Messanger from "./components/Messangers/Messanger";
import TemplateProvider from "./components/theme/TemplateProvider";
import Accountprovider from "./context/Accountprovider";
import Userprovider from "./context/Userprovider";

function App() {

  return (
    <TemplateProvider>
      <Userprovider>
        <Accountprovider>
          <Messanger />
        </Accountprovider>
      </Userprovider>
    </TemplateProvider>
  );
}

export default App;
