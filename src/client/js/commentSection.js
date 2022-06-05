const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComment = document.getElementById("comment");
const deleteForm = document.getElementById("comment_delete_form");
const ul = document.getElementById("ul");

const addComment = (text, id) => {
  const videoCommnet = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const div = document.createElement("div");
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const span2 = document.createElement("button");
  span2.innerText = "❌";
  span2.id = "deleteBtn";
  const deleteForm = document.createElement("form");
  deleteForm.className = "delete_form";
  div.appendChild(icon);
  div.appendChild(span);
  deleteForm.appendChild(span2);
  newComment.appendChild(div);
  newComment.appendChild(deleteForm);
  videoCommnet.prepend(newComment);
  deleteComment(span2, id, newComment);
};

const handleCreateComment = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/commentCreate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDeleteComment = (event) => {
  event.preventDefault();
  const li = event.target.parentElement;
  const commentId = videoComment.dataset.id;
  fetch(`/api/videos/${commentId}/commentDelete`, {
    method: "DELETE",
  });
  li.remove();
};

if (form) {
  form.addEventListener("submit", handleCreateComment);
}

if (videoComment) {
  deleteForm.addEventListener("submit", handleDeleteComment);
}
