import { Dictionary } from '@typings/utility-types/object.types';
import { ActionCreatorConfig } from '@typings/store/actions.type';

export function props<P extends Dictionary>(): ActionCreatorConfig<P> {
  return { hasProps: true, props: undefined! };
}
