const HeroVideo = () => {
  return (
    <video
      src="/grid.webm"
      className="w-[100dvw] h-auto  opacity-5 absolute invert"
      playsinline
      autoplay="autoplay"
      loop="loop"
      muted
      loop
    />
  );
};

export default HeroVideo;
