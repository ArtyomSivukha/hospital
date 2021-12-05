export type doc = {
  doctor: string;
  title: string;
  indicators: indicators[];
};

export type indicators = {
  name: string;
  value: number;
};
