import React, { useState } from "react";
import { Home, Signin } from "./pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
export const AppContext = React.createContext();

function App() {
  const [click, setClick] = useState(false);

  return (
    <AppContext.Provider value={{ click, setClick }}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signin" component={Signin}></Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
