export class MainScreenViewModel {
  constructor() {}

  scroll() {
    const startTime = performance.now();
    const startScrollY = window.scrollY;
    const endScrollY = 450;
    const duration = 2000;

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic function

        window.scrollTo(0, startScrollY + (endScrollY - startScrollY) * easedProgress);

        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, endScrollY);
      }
    };

    requestAnimationFrame(animateScroll);
  };
}

export const mainScreenVM = new MainScreenViewModel()
