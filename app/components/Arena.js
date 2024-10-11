"use client";
import React from "react";
import Postit from "./Postit";
import Status from "./Status";
import Editor from "./Editor";
import { usePostItStore } from "../store/PostItStore";
import { init, tx, id } from "@instantdb/react";

// const APP_ID_INSTANT = process.env.APP_ID_INSTANT;

function Arena({ appId, roomId }) {
  const db = init({ appId });
  let query = {};

  if (roomId) {
    query = {
      rooms: {
        $: {
          where: {
            id: roomId,
          },
        },
      },
    };
  } else {
    query = { postit: {} };
  }
  const { isLoading, error, data } = db.useQuery(query);
  console.log(data);
  console.log(error);

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-4xl font-bold'>💡 Ideas Arena</h1>
      {/* <h2>{data?.postit.length}</h2> */}
      <Status />
      <section className='grid grid-cols-8 mx-4'>
        {data?.postit?.map((postIt) => (
          <Postit key={postIt.id} color={postIt.color} text={postIt.text} />
        ))}
      </section>
      <Editor appId={appId} roomId={roomId} />
    </div>
  );
}

export default Arena;
