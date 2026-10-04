export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We understand your business, audience, products, competitors and goals.",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    description:
      "We identify opportunities and develop a marketing direction based on your objectives.",
  },
  {
    number: "03",
    title: "CREATE",
    description:
      "Our creative team develops the visual language, content and campaigns.",
  },
  {
    number: "04",
    title: "LAUNCH",
    description:
      "We take the work to the right platforms and audiences.",
  },
  {
    number: "05",
    title: "OPTIMIZE",
    description:
      "We monitor performance, learn from the data and improve the strategy.",
  },
  {
    number: "06",
    title: "GROW",
    description:
      "We continuously build on what works to create stronger brand impact.",
  },
];
