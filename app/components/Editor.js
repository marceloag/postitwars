"use client";
import React from "react";
import { useState } from "react";
import { init, tx, id } from "@instantdb/react";

function Editor({ appId, roomId }) {
  const db = init({ appId });
  const [postItText, setPostItText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostItText("");
    if (roomId) {
      alert("Writing");
      db.transact([
        tx.rooms[roomId].update({
          ...(rooms?.postit || []),
          postit: {
            text: postItText,
            color: "red",
            teamId: 1,
          },
        }),
      ]);
    } else {
      alert("Not Writing");
      db.transact([
        tx.postit[id()].update({
          text: postItText,
          color: "red",
          teamId: 1,
        }),
      ]);
    }
  };

  return (
    <div className='flex flex-col gap-4 h-40 w-1/2 absolute bottom-4'>
      <textarea
        className='w-full h-96 border-gray-600 border-solid border-2 m-0 p-0'
        onChange={(e) => setPostItText(e.target.value)}
        value={postItText}
        maxLength={140}
      ></textarea>
      <a
        href='#'
        className='block w-full h-12 bg-blue-500 text-white text-center p-3'
        onClick={handleSubmit}
      >
        Crear
      </a>
    </div>
  );
}

export default Editor;
