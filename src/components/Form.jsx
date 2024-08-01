import React from "react";

function Form(props) {
  // 定義 Form 組件，接收 props 作為參數
  return (
    <form className="form">
      {/*input和botton是HTML的內建元素，像<h1>一樣。而不是自定義組件*/}
      {/*input內建組件的屬性type指定為"text文本框"，當輸入框為空時，顯示"Username"作為提示文本*/}
      <input type="text" placeholder="Username" />
      {/*input內建組件的屬性type指定為"密碼輸入框"，當輸入框為空時，顯示"Password"作為提示文本*/}
      <input type="password" placeholder="Password" />
      {/*!A 等價於 A === False 所以如果isRegistered為假，則執行右側input內置組件*/}
      {/*input內建組件的屬性type指定為"密碼輸入框"，當輸入框為空時，顯示"Confirm Password"作為提示文本*/}
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/*我們在App中命名屬性為isRegistered。*/}
      {/*如果isRegistered為真，則顯示Login，反之顯示Register*/}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
