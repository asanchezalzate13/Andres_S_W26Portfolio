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

export function capstoneAssetUrl(fileName: string) {
  return `/capstone/${encodeURIComponent(fileName)}`;
}
