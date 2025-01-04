export interface Message {
  text: string;
  side: "left" | "right";
  muted: boolean;
  extra?: React.ReactNode;
}
