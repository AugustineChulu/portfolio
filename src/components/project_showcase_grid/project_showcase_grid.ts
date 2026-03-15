import "./project_showcase_grid.css";

export default function projectShowcaseGrid(
  projectDescription: string,
  projectHighlightCardPositionClass: string,
  highlightImages: string[]
): string {

  return `
    <div class="projectShowcaseGrid" data-position="${projectHighlightCardPositionClass}">
        <div class="project_details">
            <p>${projectDescription}</p>
        </div>
        <div class="grid">
            ${highlightImages
              .map((image) => {
                return `<div class="grid_item" data-img="${image}"></div>`;
              })
              .join("")}
        </div>
    </div>
    `;
}
