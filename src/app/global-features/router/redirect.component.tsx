import { RoutableProps, Route, route } from 'preact-router';
import { VNode } from 'preact';
import { useEffect } from 'preact/hooks';

export function Redirect(props: { to: string } & RoutableProps): VNode {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return <Route default={props.default} path={props.path} component={() => null}></Route>;
}
