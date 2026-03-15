// ------------------------------
// PORTFOLIO IMAGE PRELOADER
// ------------------------------
const progressTracker = document.getElementById(
  "progress_tracker"
) as HTMLDivElement;
const landingPage = document.getElementById("landing_page") as HTMLDivElement;
const projectCardLoadingSpinners = document.querySelectorAll(
  "div[class='loading_spinner']"
);
const projectCardCardDetails = document.querySelectorAll(
  "div[class='card_details']"
);

const preloadedPrimaryAssets: Record<string, HTMLImageElement> = {};
const preloadedSecondaryAssets: Record<string, HTMLImageElement> = {};

const primaryImageModules = import.meta.glob(
  "/src/assets/images/primary/**/*.webp",
  { eager: false }
);
const primaryImagePaths = Object.keys(primaryImageModules);

// Secondary/project images
const secondaryImageModules = import.meta.glob(
  "/src/assets/images/secondary/**/*.webp",
  { eager: false }
);
const secondaryImagePaths = Object.keys(secondaryImageModules);

// // Track loading progress
let primaryAssetsLoaded = 0;
let secondaryAssetsLoaded = 0;

// +1 for fonts
const totalPrimaryAssets = primaryImagePaths.length + 1;
const totalSecondaryAssets = secondaryImagePaths.length;

// Assets Update
function updatePrimaryAssets(): void {
  primaryAssetsLoaded++;
  const progress = (primaryAssetsLoaded / totalPrimaryAssets) * 100;
  progressTracker.style.width = `${progress}%`;
  progressTracker.style.height = `${progress}%`;

  // When done
  if (primaryAssetsLoaded === totalPrimaryAssets) {
    progressTracker.classList.remove("pulse");
    landingPage.classList.add("load");
    createDisplayBoard(preloadedPrimaryAssets);
  }
}

function updateSecondaryAssets(): void {
  secondaryAssetsLoaded++;
  // When done
  if (secondaryAssetsLoaded === totalSecondaryAssets) {
    projectCardLoadingSpinners.forEach((loadingSpinner) => {
      loadingSpinner.classList.add("loaded");
    });
    projectCardCardDetails.forEach((cardDetails) => {
      cardDetails.classList.add("show");
    });
  }
}

// Wait for fonts as part of loading
function preloadFonts(): void {
  document.fonts.ready
    .then(() => {
      updatePrimaryAssets();
    })
    .catch((err) => {
      console.error("Failed to load fonts:", err);
      updatePrimaryAssets();
    });
}

function createDisplayBoard(preloads: Record<string, HTMLImageElement>) {
  const bg_display_board = document.getElementById("bg_display_board");

  let display_board_card_count = 0;
  const display_board_cards: HTMLDivElement[] = [];

  let isColUp: boolean = true;

  const preloadedObjects = Object.entries(filterPreloads(preloads));

  preloadedObjects.forEach(([path, img]) => {
    if (path.includes("display_board")) {
      const dis_board_card: HTMLDivElement = document.createElement("div");
      display_board_card_count++;

      dis_board_card.style.backgroundImage = `url('${img.src}')`;
      dis_board_card.classList.add("display_board_card");
      display_board_cards.push(dis_board_card);

      if (display_board_card_count % 8 === 0) {
        const display_board_card_column: HTMLDivElement =
          document.createElement("div");

        if (isColUp) {
          display_board_card_column.classList.add("column_track", "up");
          isColUp = false;
        } else {
          display_board_card_column.classList.add("column_track", "down");
          isColUp = true;
        }

        for (let i = 0; i < 2; i++) {
          display_board_cards.forEach((card) => {
            display_board_card_column.appendChild(card.cloneNode(true));
          });
        }

        bg_display_board?.appendChild(display_board_card_column);
        display_board_cards.length = 0;
      }
    }
  });
}

function filterPreloads(
  preloads: Record<string, HTMLImageElement>
): Record<string, HTMLImageElement> {
  const result: Record<string, HTMLImageElement> = {};

  Object.entries(preloads).forEach(([path, img]) => {
    const normalizedPath = path
      .replace(/^\/?(src\/assets\/images\/|assets\/)/, "")
      .replace(/\.webp$/, "")
      .replace(/-[A-Za-z0-9]{6,}$/, "");

    result[normalizedPath] = img;
  });

  return result;
}

// Map Preloaded Images to DOM
function applyImagesToDOM(preloads: Record<string, HTMLImageElement>): void {
  const ImageDivs = document.querySelectorAll(
    "[data-img]"
  ) as NodeListOf<HTMLDivElement>;

  const preloadedObjects = Object.entries(filterPreloads(preloads));

  preloadedObjects.forEach(([path, img]) => {
    let isDivFound = false;
    // Find all divs with a data-img attr that matches the given path
    // assign a background when a div is found
    Array.from(ImageDivs).forEach((div) => {
      const key = div.getAttribute("data-img");

      if (key && path.includes(key)) {
        div.style.backgroundImage = `url('${img.src}')`;
        isDivFound = true;
      }
    });

    if (!isDivFound) {
      if (!path.includes("display_board")) {
        console.warn(
          `No data-img attribute found for the preloaded image: ${path}`
        );
      }
    }
  });
}

// Type helper for resolving .default safely
function resolveModule(mod: any): string {
  if (mod && typeof mod === "object" && "default" in mod) {
    return mod.default;
  }
  return String(mod);
}

primaryImagePaths.forEach((path, index) => {
  if (index === 0) {
    preloadFonts();
  }

  const loader = primaryImageModules[path] as () => Promise<any>;

  loader().then((mod) => {
    const img = new Image();
    img.src = resolveModule(mod);

    img.onload = () => {
      preloadedPrimaryAssets[path] = img;
      updatePrimaryAssets();
    };

    img.onerror = () => {
      console.warn(`Failed to load: ${path}`);
      updatePrimaryAssets();
    };
  });
});

// Lazy load secondary images
setTimeout(() => {
  secondaryImagePaths.forEach((path) => {
  const loader = secondaryImageModules[path] as () => Promise<any>;

  loader().then((mod) => {
    const img = new Image();
    img.src = resolveModule(mod);

    img.onload = () => {
      preloadedSecondaryAssets[path] = img;
      updateSecondaryAssets();
    };

    img.onerror = () => {
      console.warn(`Failed to load: ${path}`);
    };
  });
});
}, 0);


export function imagesToDOM() {
  applyImagesToDOM(preloadedPrimaryAssets);
  applyImagesToDOM(preloadedSecondaryAssets);
}
