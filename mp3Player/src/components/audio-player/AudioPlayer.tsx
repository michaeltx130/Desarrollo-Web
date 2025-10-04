import { useRef, useState, useEffect } from "react";
import "../../styles/AudioPlayerStyle.css";

interface Song {
  name: string;
  src: string;
}

const songs: Song[] = [
  { name: "Am I Dreaming (AUDIO)", src: "../Am I Dreaming.mp3" },
  { name: "NEW DROP [Official Audio]", src: "../NEW DROP.mp3" },
  { name: "Flashing Lights", src: "../Flashing Lights.mp3" },
  { name: "Runaway (Audio)", src: "../Runaway.mp3" },
  { name: "Tek It (I Watch The Moon)", src: "../Tek It.mp3" },
];

const AudioPlayer = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);

  useEffect(() => {
    if (audioElement.current) {
      const src = audioElement.current.src;
      let name = src.split("/").pop() || "";
      name = decodeURIComponent(name).replace(/\.[^/.]+$/, "");
      setFileName(name);

      const updateProgress = () => {
        if (!audioElement.current) return;
        const current = audioElement.current.currentTime;
        const total = audioElement.current.duration || 1;
        setCurrentTime(current);
        setDuration(total);
        setProgress((current / total) * 100);
      };

      audioElement.current.addEventListener("timeupdate", updateProgress);
      audioElement.current.addEventListener("loadedmetadata", () => {
        if (audioElement.current) setDuration(audioElement.current.duration);
      });

      return () => {
        audioElement.current?.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, [currentSong]);

  const handlePlay = () => {
    audioElement.current?.play();
  };
  const handlePause = () => {
    audioElement.current?.pause();
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioElement.current) return;
    const value = Number(event.target.value);
    audioElement.current.currentTime = (value / 100) * duration;
    setProgress(value);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioElement.current) {
      audioElement.current.volume = newVolume;
    }
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  function changeSong(song: Song): void {
    setCurrentSong(song);
    if (audioElement.current) {
      audioElement.current.src = song.src;
      audioElement.current.currentTime = 0;
      audioElement.current.play();
    }
  }

  return (
    <div className="audio-player">
      <h2>DASC UABCS - MP3 Player</h2>
      <div className="Songs">
        <ul>
          {songs.map((song) => (
            <li key={song.name}>
              <button onClick={() => changeSong(song)}>{song.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <p>{fileName}</p>
      <button onClick={handlePlay}>▶</button>{" "}
      <button onClick={handlePause}>⏸</button>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        id="progress"
        style={{
          background: `linear-gradient(to right, #ff9500 ${progress}%, #d3d3d3 ${progress}%)`,
        }}
      />
      <div className="times">
        <span>{formatTime(currentTime)}</span> /{" "}
        <span>{formatTime(duration)}</span>
      </div>
      <div className="volume">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{(volume * 100).toFixed(0)}%</span>
      </div>
      <audio
        ref={audioElement}
        src={currentSong.src}
        className="hidden"
      ></audio>
    </div>
  );
};

export default AudioPlayer;
