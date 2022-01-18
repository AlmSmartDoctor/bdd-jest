import EmptyFunction = jest.EmptyFunction;
import FunctionLike = jest.FunctionLike;

export const given = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: number | string | Function | FunctionLike,
  fn: EmptyFunction,
) => describe(`Given ${name},`, fn);

export const when = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: number | string | Function | FunctionLike,
  fn: EmptyFunction,
) => describe(`When ${name},`, fn);

export const then = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  name: number | string | Function | FunctionLike,
  fn: EmptyFunction,
) => describe(`Then ${name}.`, fn);
