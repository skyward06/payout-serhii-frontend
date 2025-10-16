export type MedalConfigType = {
  gradient: string;
  iconGradient: string;
  bgGradient: string;
  borderColor: string;
  shadowColor: string;
  icon: string;
  label: string;
};

export interface TopEarnerItem {
  avatar?: string | null;
  fullName: string;
  earned?: number | string;
  totalIntroducers?: number | string;
}
