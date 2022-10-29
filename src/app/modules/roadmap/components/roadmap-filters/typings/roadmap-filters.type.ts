import { ContentType, Language } from '@interfaces/new-interfaces';

export type FilterValue = Language | ContentType;

export type FilterOption = {
  labelText: string;
  value: FilterValue;
  icon?: JSX.Element;
};
