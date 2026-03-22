/**
 * ParkSpot capstone — PDFs in `public/capstone/` (team T29 deliverables).
 * Use `capstoneAssetUrl()` for paths so spaces in filenames work in the browser.
 */

/** [ParkSpot mockup (Figma)](https://www.figma.com/design/9uK5f5D3wRC4Bu8uVXaFTm/ParkSpot-Mockup?node-id=0-1&p=f&t=CeymSIn9nMCaWYD6-0) */
export const parkSpotMockupFigmaUrl =
  "https://www.figma.com/design/9uK5f5D3wRC4Bu8uVXaFTm/ParkSpot-Mockup?node-id=0-1&p=f&t=CeymSIn9nMCaWYD6-0";

export const capstonePdfFiles = {
  projectSummary: "F25_T29_Project Summary.pdf",
  projectVision: "F25_T29_Project Vision.pdf",
  highLevelRequirements: "F25_T29_High Level Requirements.pdf",
  projectPlan: "W26_T29_Project Plan.pdf",
  requirementsAnalysisAndDesign: "F25_T29_Requirements Analysis and Design.pdf",
  projectReport2: "W26_T29_ProjectReport2.pdf",
} as const;

/** URL path under the site root for a file in `public/capstone/`. */
export function capstoneAssetUrl(fileName: string) {
  return `/capstone/${encodeURIComponent(fileName)}`;
}
