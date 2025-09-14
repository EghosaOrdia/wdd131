const inputEl = document.querySelector("#favchap");
const addChapterBtn = document.querySelector("#addChapter");
const listEl = document.querySelector("#list");

addChapterBtn.addEventListener("click", () => {
  if (inputEl.value.trim() !== "") {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = inputEl.value;
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", function () {
      listEl.removeChild(li);
      inputEl.focus();
      inputEl.value = "";
    });

    li.append(delBtn);
    listEl.append(li);
  }
});
