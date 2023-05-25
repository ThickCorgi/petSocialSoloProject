import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import RandomPic from "./RandomPic.js"


export default function CreatePage() {
  const maxLength = 15;
  const [titlename, setTitlename] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState(``);



  async function createpage(ev) {
      

      
      ev.preventDeafult();
    const response = await fetch("http://localhost:4000/create", {
      method: "POST",
      //sending information in json
    //   body: JSON.stringigy({ titlename, author, date, content, image }),

    //   header: { "Content-Type": "application/json" },
    });
    // await response.json()
  }

  return (
    <div className="newpost">
      <h1>Create new Post</h1>
      <form onSubmit={createpage} className="createpage" action="">
        {/* <p><strong>title</strong></p> */}
        <input
          className="titlename"
          type="title"
          placeholder={`Title max ${maxLength}`}
          value={titlename}
          maxLength={maxLength}
          onChange={(ev) => setTitlename(ev.target.value)}
        />
<div className="upload">
        <p><strong>Upload photo</strong></p>
        <input
          className="img"
          type="file"
        //   value={image}
          onChange={(ev) => setImages(ev.target.images)}
        />
</div>

<></>
        <p><strong>Login</strong></p>
        <input
          className="content"
          type="summary"
          maxLength={maxLength * 4}
          placeholder={`max ${maxLength * 4}`}
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        />

        <div className="buttonA">
          <button className="color2"><strong>Create</strong></button>
          {/* <button className="color3">Save</button> */}

        </div>
      </form>
      <RandomPic />

    </div>
  );
}
