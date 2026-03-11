export type SystemOption = '落日商街' | '园博河畔';

export type ModuleType =
  | 'dashboard'
  | 'merchant'
  | 'space'
  | 'contract'
  | 'finance'
  | 'parking'
  | 'investment'
  | 'activity'
  | 'mall';

export interface User {
  id: string;
  name: string;
  role: string;
}
