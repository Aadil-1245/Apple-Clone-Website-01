import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        console.log("🎵 Autoplay started successfully!");
      } catch (error) {
        console.log("🚨 Autoplay blocked. Waiting for user interaction.");

        // Add event listeners to start audio on user interaction
        const enableAudio = async () => {
          await audioRef.current.play();
          document.removeEventListener("click", enableAudio);
          document.removeEventListener("keydown", enableAudio);
          document.removeEventListener("touchstart", enableAudio);
        };

        document.addEventListener("click", enableAudio);
        document.addEventListener("keydown", enableAudio);
        document.addEventListener("touchstart", enableAudio);
      }
    };

    // Preload the audio to avoid delay
    if (audioRef.current) {
      audioRef.current.load();
    }

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} src="/assets/videos/AppleMusic.mp3" preload="auto" loop />
  );
};

export default MusicPlayer;
