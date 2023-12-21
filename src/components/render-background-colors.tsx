const RenderBackgroundColors = () => {
  return (
    <div className="relative inset-0">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] lg:h-[700px] lg:w-[1000px] blur-3xl bg-gradient-to-bl from-blue-900/30 via-blue-900/10 to-background" />
      <div className="hidden lg:absolute top-0 left-0 h-[500px] w-[500px] blur-3xl bg-gradient-to-br from-emerald-900/10 via-emerald-900/10 to-background" />
    </div>
  );
};

export default RenderBackgroundColors;
