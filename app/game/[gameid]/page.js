// "use client";
import Arena from "../../components/Arena";
const APP_INSTANTDB_ID = process.env.APP_ID_INSTANT;

export default function Game({ params }) {
  return (
    <div>
      <Arena appId={APP_INSTANTDB_ID} roomId={params.gameid} />
    </div>
  );
}
