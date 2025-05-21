/**
 * Type representing the different types of React components that can be
 * processed by the reconciler. Each value corresponds to a specific type
 * of component in the React tree.
 * - `FunctionComponent` (`0`): Represents a function component.
 * - `HostRoot` (`3`): Represents the root of the host tree.
 * - `HostComponent` (`5`): Represents a DOM element or other host platform component.
 * - `HostText` (`6`): Represents a text node in the host environment.
 */
export type WorkTag =
	| typeof FunctionComponent
	| typeof HostRoot
	| typeof HostComponent
	| typeof HostText;

export const FunctionComponent = 0;
export const HostRoot = 3;
export const HostComponent = 5;
export const HostText = 6;
