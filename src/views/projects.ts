import projectHighlightCard from "../components/project_highlight_card/project_highlight_card";
import projectShowcaseGrid from "../components/project_showcase_grid/project_showcase_grid";
import "../css/projects.css";
import { project, projectCardPositions } from "../scripts/variableDefinations";

const projects: project[] = [
  {
    projectTitle: "Cheverolet Camaro Gen 1",
    projectType: "3D",
    projectDescription: `A low poly model of the Cheverolet Camaro Gen 1`,
    projectHighlightCardPositionClass: projectCardPositions.left3,
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "cheverolet_camaro_gen1/1",
      "cheverolet_camaro_gen1/2",
      "cheverolet_camaro_gen1/3",
      "cheverolet_camaro_gen1/4",
      "cheverolet_camaro_gen1/5",
    ],
  },
  {
    projectTitle: "Stock Management System",
    projectType: "web",
    projectDescription: `A small scale distributed system for stock Management.
                          Done in PHP Laravel with a Type Script api 
                          and mySql database`,
    projectHighlightCardPositionClass: projectCardPositions.left2,
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "stock_mgmt_sys/1",
      "stock_mgmt_sys/2",
      "stock_mgmt_sys/3",
      "stock_mgmt_sys/4",
    ],
  },
  {
    projectTitle: "Posters & Covers",
    projectType: "graphics",
    projectDescription: `A selection of the posters and cover arts designed 
                          primarily in Adobe Photoshop`,
    projectHighlightCardPositionClass: projectCardPositions.left1,
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "poster_covers/1",
      "poster_covers/2",
      "poster_covers/3",
      "poster_covers/4",
    ],
  },
  {
    projectTitle: "Illustrations",
    projectType: "graphics",
    projectDescription: `A selection of illustrations created in Adobe Illustrator`,
    projectHighlightCardPositionClass: projectCardPositions.focused,
    linkTitle: "visit my instagram",
    linkRef: "https://www.instagram.com/chuluaugustine/",
    highlightImages: [
      "illustrations/1",
      "illustrations/2",
      "illustrations/3",
      "illustrations/4",
      "illustrations/5",
      "illustrations/6",
      "illustrations/7",
    ],
  },
  {
    projectTitle: "Photo Manipulation",
    projectType: "graphics",
    projectDescription: `A selection of photo manipulation art works designed 
                          with a combination of Adobe Photoshop and Adobe 
                          Illustrator`,
    projectHighlightCardPositionClass: projectCardPositions.right1,
    linkTitle: "visit my instagram",
    linkRef: "https://www.instagram.com/chuluaugustine/",
    highlightImages: [
      "photo_manip/1",
      "photo_manip/2",
      "photo_manip/3",
      "photo_manip/4",
      "photo_manip/5",
      "photo_manip/6",
    ],
  },
  {
    projectTitle: "Student Portal UI uplift",
    projectType: "web",
    projectDescription: `An impression of a UI uplift for the mulungushi university 
                          student portal done with PHP Laravel`,
    projectHighlightCardPositionClass: projectCardPositions.right2,
    linkTitle: "visit my instagram",
    linkRef: "https://www.instagram.com/chuluaugustine/",
    highlightImages: [
      "stdt_portal_uplift/1",
      "stdt_portal_uplift/2",
      "stdt_portal_uplift/3",
      "stdt_portal_uplift/4",
    ],
  },
  {
    projectTitle: "Swiss Bracket Manager",
    projectType: "web",
    projectDescription: `A swiss bracket format tournament manager done with React`,
    projectHighlightCardPositionClass: projectCardPositions.right3,
    linkTitle: "visit my swiss bracket manager project",
    linkRef: "https://augustinechulu.github.io/swiss-bracket-manager/",
    highlightImages: [
      "swiss_brkt_mgr/1",
      "swiss_brkt_mgr/2",
      "swiss_brkt_mgr/3",
      "swiss_brkt_mgr/4",
      "swiss_brkt_mgr/5",
      "swiss_brkt_mgr/6",
    ],
  },
  {
    projectTitle: "Zenvo TRS-S 2019",
    projectType: "3D",
    projectDescription: `A low poly model of the Zenvo TRS-S 2019`,
    projectHighlightCardPositionClass: "",
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "znevo_trs_s_2019/1",
      "znevo_trs_s_2019/2",
      "znevo_trs_s_2019/3",
      "znevo_trs_s_2019/4",
    ],
  },
  {
    projectTitle: "ZWANGENDABA Royal Grave National Monument Site",
    projectType: "3D",
    projectDescription: `A 3D monument concept for the Zwangendaba 
                          Royal Grave National Monument Site`,
    projectHighlightCardPositionClass: "",
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "zwangendaba_rgnms/1",
      "zwangendaba_rgnms/2",
      "zwangendaba_rgnms/3",
      "zwangendaba_rgnms/4",
      "zwangendaba_rgnms/5",
      "zwangendaba_rgnms/6",
    ],
  },
  {
    projectTitle: "Blender Bim House Model",
    projectType: "3D",
    projectDescription: `A 3 bedroom house designed in blender
                          compatible with other BIM projects and software.
                          Made  using the Bonsai addon for Blender`,
    projectHighlightCardPositionClass: "",
    linkTitle: "",
    linkRef: "",
    highlightImages: [
      "blender_bim_house1/1",
      "blender_bim_house1/2",
      "blender_bim_house1/3",
      "blender_bim_house1/4",
    ],
  },
];

(document.getElementById("projectsView") as HTMLDivElement).innerHTML = `
    <div id="my_projects_wrapper" class="tab_view">

      <div id="my_projects_intro">
        <div>
            <h1 class="view_title_header">
                <i class="fa-solid fa-pen-ruler"></i> 
                MY WORKS
            </h1>

            <p>
                I’ve put together a collection of projects that reflect my <b>work and creative approach.</b> 
                These include <b>websites, digital designs, and 3D models</b>, each demonstrating a different set of skills and techniques I use in my craft. 
                This section gives you a closer look at the <b>variety, quality</b>, and thoughtfulness behind my work and invites you to explore how ideas 
                are transformed into engaging, polished experiences.
            </p>
        </div>

        <div>
          <div id="highlight_project_cards_wrapper">
              <div id="highlight_cards_carousel">
                  ${projects
                    .map((project) => {
                      return projectHighlightCard(
                        project.projectTitle,
                        project.projectType,
                        project.linkTitle,
                        project.linkRef,
                        project.projectHighlightCardPositionClass,
                        project.highlightImages,
                      );
                    })
                    .join("")}
              </div>

              <button type="button" class="default_icon_btn" id="prev_project_btn" title="previous">
                  <i class="fa-solid fa-arrow-left"></i>
              </button>

              <button type="button" class="default_icon_btn" id="next_project_btn" title="next">
                  <i class="fa-solid fa-arrow-right"></i>
              </button>
          </div>
        </div>
      </div>

      <div id="my_projects_showcase">
        <div id="showcase_grid_wrapper">
        ${projects
          .map((project) => {
            return projectShowcaseGrid(
              project.projectDescription,
              project.projectHighlightCardPositionClass,
              project.highlightImages,
            );
          })
          .join("")}
          </div>
      </div>

    </div>
`;

/**************************************************************************************************************/

const highlight_cards_carousel = document.getElementById(
  "highlight_cards_carousel",
) as HTMLElement;
const highlight_project_cards = Array.from(
  highlight_cards_carousel.children,
) as HTMLElement[];

const showcase_grid_wrapper = document.getElementById(
  "showcase_grid_wrapper",
) as HTMLElement;
const showcase_grid_cards = Array.from(
  showcase_grid_wrapper.children,
) as HTMLElement[];

// Define the order of classes
const positionOrder = [
  projectCardPositions.left3,
  projectCardPositions.left2,
  projectCardPositions.left1,
  projectCardPositions.focused,
  projectCardPositions.right1,
  projectCardPositions.right2,
  projectCardPositions.right3,
];

// Function to shift classes
const shiftClasses = (direction: string) => {
  const totalCards = highlight_project_cards.length;
  const numberOfPositions = positionOrder.length;

  // Find the current start index (card with `left3_card` class)
  let startIndex = highlight_project_cards.findIndex(
    (card) => card.getAttribute("data-position") === projectCardPositions.left3,
  );

  if (startIndex === -1) {
    // Default to starting at the first card if no class is currently set
    startIndex = 0;
  }

  // Determine the new starting index based on direction
  if (direction === "next") {
    startIndex = (startIndex + 1) % totalCards;
  } else if (direction === "previous") {
    startIndex = (startIndex - 1 + totalCards) % totalCards;
  }

  // Remove only classes from classOrder for all cards
  highlight_project_cards.forEach((card) => {
    // positionOrder.forEach((position) => {
    //   // card.classList.remove(position)
    // });
    card.setAttribute("data-position", "");
  });

  showcase_grid_cards.forEach((card) => {
    card.setAttribute("data-position", "");
  });

  // Apply the new classOrder starting from the new index
  for (let i = 0; i < numberOfPositions; i++) {
    const cardIndex = (startIndex + i) % totalCards;
    // highlight_project_cards[cardIndex].classList.add(positionOrder[i]);
    highlight_project_cards[cardIndex].setAttribute(
      "data-position",
      positionOrder[i],
    );

    showcase_grid_cards[cardIndex].setAttribute(
      "data-position",
      positionOrder[i],
    );
  }
};

// Event listeners for buttons
const next_project_btn = document.getElementById(
  "next_project_btn",
) as HTMLElement;
const prev_project_btn = document.getElementById(
  "prev_project_btn",
) as HTMLElement;

next_project_btn.addEventListener("click", () => {
  next_project_btn.classList.remove("clicked");
  void next_project_btn.offsetWidth;
  next_project_btn.classList.add("clicked");
  shiftClasses(next_project_btn.getAttribute("title") as string);
});
prev_project_btn.addEventListener("click", () => {
  prev_project_btn.classList.remove("clicked");
  void next_project_btn.offsetWidth;
  prev_project_btn.classList.add("clicked");
  shiftClasses(prev_project_btn.getAttribute("title") as string);
});

const cycleHighlights = () => {
  if (
    window.appState &&
    window.appState.currentPage === "projectsView" &&
    window.appState.isWindowFocused
  ) {
    const active_project_card = document.querySelector(
      "div[class*='projectHighlightCard'][data-position='focused_card']",
    );

    if (active_project_card) {
      const children = Array.from(active_project_card.children[1].children);

      // Skip the first child
      const rest = children.slice(1);

      // Find the first child in order without 'show'
      const firstHiddenIndex = rest.findIndex(
        (child) => !child.classList.contains("show"),
      );

      if (firstHiddenIndex !== -1) {
        // Show the first hidden child
        rest[firstHiddenIndex].classList.add("show");
      } else {
        // All children are shown, remove 'show' from all except the first
        rest.forEach((child) => child.classList.remove("show"));
      }
    }
  }
  
  setTimeout(cycleHighlights, 15000);
};

cycleHighlights();
