export type Idea = {
  name: string;
  description: string;
  features: string[];
  why_it_works: string;
  mvp_scope: string;
};

export type FormValues = {
  industry: string;
  audience: string;
  problem: string;
  platform: string;
  monetization: string;
  complexity: string;
};
