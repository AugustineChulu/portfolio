import "./assets/fontawesome-free-6.5.1-web/css/all.css";
import "./views/about";
import "./views/projects";
import "./views/services";
import "./views/skillsets";
import "./views/menu";
import "./scripts/onboard_assets";
import "./scripts/landing_page";
import "./scripts/view_window";

declare global {
  interface Window {
    appState: {
      currentPage: string;
      isWindowFocused: boolean;
    };
  }
}

window.appState = {
  currentPage: "landing_page",
  isWindowFocused: true,
};

const handleBlur = () => {
  window.appState.isWindowFocused = false;
};

const handleFocus = () => {
  window.appState.isWindowFocused = true;
};

window.addEventListener("blur", handleBlur);
window.addEventListener("focus", handleFocus);