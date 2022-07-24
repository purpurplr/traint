import { createContext, RenderableProps, VNode } from 'preact';
import { useContext } from 'preact/compat';
import { useEffect, useMemo } from 'preact/hooks';
import { ToasterOptions, ToasterApi } from '@shared-components/toasts/toaster.types';
import { Toaster } from '@shared-components/toasts/components/toaster/toaster.component';
import { toasterActions, useToasterStore } from '@shared-components/toasts/core/toaster.store';
import { DEFAULT_TOASTER_OPTIONS } from '@shared-components/toasts/toaster-config.constants';
import { mergeDeep } from '@utils/collection/merge-deep.util';
import { toastBuilderFactory } from '@shared-components/toasts/core/toast-builder-factory.utils';

const ToasterContext = createContext<ToasterApi>({} as ToasterApi);

export function ToasterProvider({ children, ...toasterOptions }: RenderableProps<Partial<ToasterOptions>>): VNode {
  const [toastList, dispatch] = useToasterStore();

  const mergedToasterOptions: ToasterOptions = useMemo(
    () => mergeDeep({ ...DEFAULT_TOASTER_OPTIONS }, toasterOptions),
    [toasterOptions],
  );

  useEffect(() => {
    dispatch(toasterActions.setToastsLimit({ limit: mergedToasterOptions.toastsLimit }));
  }, [toasterOptions.toastsLimit]);

  const toasterApi: ToasterApi = useMemo(() => {
    const toastBuilder = toastBuilderFactory(mergedToasterOptions, dispatch);

    return Object.assign(toastBuilder('custom'), {
      error: toastBuilder('error'),
      success: toastBuilder('success'),
      message: toastBuilder('message'),
    });
  }, [dispatch]);

  // TODO change toasts limit based on the resolution
  return (
    <ToasterContext.Provider value={toasterApi}>
      {children}
      <Toaster toastList={toastList} />
    </ToasterContext.Provider>
  );
}

export function useToaster(): ToasterApi {
  return useContext(ToasterContext);
}
