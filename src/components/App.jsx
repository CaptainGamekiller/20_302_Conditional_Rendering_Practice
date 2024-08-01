import React from "react";
import Form from "./Form";
// 如何在子組件(Form)用到父組件(App)中的變量呢? 使用props
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/*使用JSX語法來渲染一個名為Form的React 組件，並且傳遞了
      一個名為isRegistered的屬性，屬性值是來自變量userIsRegistered*/}
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
