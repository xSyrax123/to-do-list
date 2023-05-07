function add_task() {
  const li = document.createElement("li");
  const input_text = document.querySelector("textarea").value;
  const t = document.createTextNode(input_text);
  li.appendChild(t);

  if (input_text === "")
    alert("You can't add an empty task.");
  else
    document.querySelector(".task_list").appendChild(li);

  document.querySelector("textarea").value = "";

  const button = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  button.onclick = () => li.remove();
  li.appendChild(button);

  li.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") 
      ev.target.classList.toggle("complete_task");
  }, false); 
}

document.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    add_task();
  }
});