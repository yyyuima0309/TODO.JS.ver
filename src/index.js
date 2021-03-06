const onClickAdd = () => {
  //入力された文字の取得と初期化
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  createIncompleteList(inputText);
};

// 君がやるべきリストへの追加する関数
const createIncompleteList = (text) => {
  //ulの作成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  //liの作成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了ボタン押されたときのイベント
  completeButton.addEventListener("click", () => {
    //リストからの削除
    const completeTarget = completeButton.parentNode;
    document.querySelector("#imcomplete-list").removeChild(completeTarget);

    //ボタン(完了)の親要素の取得
    const addList = completeButton.parentNode;

    //li要素の取得
    const text = addList.firstElementChild.innerText;
    //ボタン要素の初期化
    addList.textContent = null;
    //liの生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンのクリックイベント
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.querySelector("#complete-list").removeChild(backTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 子要素としてそれぞれ追加
    addList.appendChild(li);
    addList.appendChild(backButton);
    // 未完了リストに追加
    document.querySelector("#complete-list").appendChild(addList);
  });

  //削除ボタンの生成＆機能追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.querySelector("#imcomplete-list").removeChild(deleteTarget);
  });

  //ネスト　ulの子要素としてそれぞれ要素をを追加
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  //todoに追加する
  document.querySelector("#imcomplete-list").appendChild(ul);
};

//追加クリックしたらおこるイベント
document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
