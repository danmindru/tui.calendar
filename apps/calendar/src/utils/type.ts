import isUndefined from 'tui-code-snippet/type/isUndefined';

export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || value === null;
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export { default as isNumber } from 'tui-code-snippet/type/isNumber';
export { default as isObject } from 'tui-code-snippet/type/isObject';
export { default as isString } from 'tui-code-snippet/type/isString';
export { default as isUndefined } from 'tui-code-snippet/type/isUndefined';
