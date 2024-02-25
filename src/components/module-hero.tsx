import { BackgroundGradientAnimation } from "./bg-background-animations";
import HeroDescriptionText from "./hero-description-text";
import HeroDescriptionAuthor from "./hero-description-author";
import ScrollHideIcon from "./scroll-hide-icon";

const ModuleHero = () => {
  return (
    <div className="relative -top-16 flex flex-col items-center justify-center  antialiased">
      <BackgroundGradientAnimation interactive={false} className=" z-10">
        <div className="absolute left-1/2 top-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 lg:px-0">
          <div className="w-full max-w-7xl">
            <div className="flex w-full flex-col items-center">
              <div className="relative">
                <div className="text-left">
                  <h1 className="text-4xl font-extralight leading-tight text-white md:text-6xl lg:text-9xl">
                    <span className="text-yellow-400">Web</span> Development
                  </h1>

                  <h1 className="text-4xl font-extralight leading-tight text-white md:text-6xl lg:text-9xl">
                    <span className="text-yellow-400">UX/UI</span> Design
                  </h1>
                </div>
                <div className="relative z-50 mt-6 rounded-xl text-left lg:absolute lg:-bottom-32 lg:right-0 lg:mt-0 lg:flex lg:items-end lg:justify-end">
                  <div className="flex flex-col lg:text-right">
                    <HeroDescriptionText words="Self-taught developer with an interest for design." />
                    <HeroDescriptionAuthor words="Ruben Odegard" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 left-1/2 translate-x-1/2 animate-bounce">
          <ScrollHideIcon />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default ModuleHero;
