/**
 * React element type definitions.
 */

/** Generic React element type. */
export type Type = unknown;

/** Key identifier for React elements. */
export type Key = unknown;

/** Properties object for React elements. */
export type Props = Record<string, unknown>;

/** React reference object. */
export type Ref = unknown;

/**
 * One of the three followings:
 * - a DOM label string,
 * - a React component type
 * - a function that returns a React component.
 */
export type ElementType = unknown;

/**
 * Represents the structure of a React element.
 */
export type ReactElementType = {
	/** Internal React type identifier. */
	$$typeof: symbol | number;
	/** Unique identifier for the element. */
	key: Key;
	/** Component props. */
	props: Props;
	/** Reference to the element. */
	ref: Ref;
	/** Component type. */
	type: ElementType;
	/** Internal marker string. */
	__mark: string;
};
