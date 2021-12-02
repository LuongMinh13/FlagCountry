import React from "react";
import axios from "axios";

function DeleteArticle({ id }) {
  const handleDelete = () => {
    axios.delete("http://localhost:3003/articles/" + id);
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        if (window.confirm("Do you want to delete article ?")) {
          handleDelete();
        }
      }}
    >
      Delete
    </button>
  );
}

export default DeleteArticle;
