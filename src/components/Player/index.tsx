import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

const Player = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <MediaPlayer src={videoUrl} className="w-1/2 max-w-full max-md:w-full">
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default Player;
