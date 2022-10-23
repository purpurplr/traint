import { ContentType, Language } from '@typings/new-interfaces';

export type FilterValue = Language | ContentType;

export type FilterOption = {
  labelText: string;
  value: FilterValue;
  icon?: JSX.Element;
};
