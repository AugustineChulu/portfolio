export enum projectCardPositions {
    left3 = "left3_card",
    left2 = "left2_card",
    left1 = "left1_card",
    right3 = "right3_card",
    right2 = "right2_card",
    right1 = "right1_card",
    focused = "focused_card",
}

export type project = {
  projectTitle: string;
  projectType: string;
  projectDescription: string,
  projectHighlightCardPositionClass: string;
  linkTitle: string;
  linkRef: string;
  highlightImages: string[];
};
