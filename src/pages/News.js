import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import axios from "axios";
import Article from "../components/Article";

function News() {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };

  const handleSubmit = (e) => {
    // Empecher la page recharge
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      axios
        .post("http://localhost:3003/articles", {
          author: author,
          content: content,
          date: Date.now(),
        })
        .then(() => {
          setContent("");
          setAuthor("");
          getData();
        });
    }
  };

  return (
    <div className="news-container">
      <Navbar />
      <Logo />
      <h1>News</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Name"
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Messagge"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Need more than 140 words</p>}
        <input type="submit" value="Send" />
      </form>

      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
}

export default News;
