import { ContentType, Language } from '@typings/new-interfaces';

export type FilterValue = Language | ContentType;

export type FilterOptions = {
  labelText: string;
  value: FilterValue;
  icon?: JSX.Element;
}[];
