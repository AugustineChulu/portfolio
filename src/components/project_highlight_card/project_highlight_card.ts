import "./project_highlight_card.css";

export default function projectHighlightCard(
  projectTitle: string,
  projectType: string,
  linkTitle: string,
  linkRef: string,
  projectHighlightCardPositionClass: string,
  highlightImages: string[]
): string {

    let projectTypeIcon: string = '';

    if(projectType === 'web'){
        projectTypeIcon = 'fa-code'
    }else if(projectType === 'graphics'){
        projectTypeIcon = 'fa-pen-nib'
    }else if(projectType === '3D'){
        projectTypeIcon = 'fa-cube'
    }

  return `
    <div class="projectHighlightCard" data-position="${projectHighlightCardPositionClass}">
        <div class="loading_spinner">
            <i class="fa-solid ${projectTypeIcon} fa-beat-fade"></i>
        </div>
        <div class="highlights">
            ${highlightImages
              .slice(0, 5).map((image, index) => {
                return `<div class="${
                  (index == 0) ? "show" : ""
                }" data-img="${image}"></div>`;
              })
              .join("")}
        </div>
        <div class="card_details">
            <div class="info">
                <h2>${projectTitle}</h2>
            </div>
            ${
              (linkTitle != "")
                ? `<div class="interactions">
                        <a title="${linkTitle}" href="${linkRef}" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>`
                : ""
            }
        </div>
    </div>
    `;
}
