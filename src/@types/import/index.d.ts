declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.ico";
declare module "*.svg";
declare module "*.json";

declare module "*.txt" {
  const content: string;
  export default content;
}

declare module "*.md" {
  const content: string;
  export default content;
}
