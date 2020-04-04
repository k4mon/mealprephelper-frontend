import React from 'react';
import Layout from "./containers/Layout/Layout";
import Recipes from "./containers/Recipes/Recipes";

function App() {
  return (
    <div>
      <Layout>
          <Recipes/>
      </Layout>
    </div>
  );
}

export default App;
