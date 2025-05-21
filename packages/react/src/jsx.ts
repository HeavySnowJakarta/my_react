import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbol';

import {
	Type,
	Ref,
	Key,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'my_own_react'
	};
	return element;
};

/**
 * `jsx()` recieves the type of the element, the subobjects and other
 * configurations and returns a React element.
 * @param type The element type
 * @param children The children of the element
 * @param config The configuration object
 * - `config.key` A unique identifier for the element to help React
 * to identify
 * - `config.ref` A reference to access the underlying DOM node
 * @param props - Relative properties
 * @returns Corresponding React element
 */
export const jsx = (
	type: ElementType,
	config: unknown,
	...children: unknown[]
) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};
	for (const configKey in config as object) {
		const val = (config as Record<string, unknown>)[configKey];
		if (configKey === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (configKey === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, configKey)) {
			props[configKey] = val;
		}
	}
	const childrenLen = children.length;
	if (childrenLen) {
		if (childrenLen === 1) {
			props.children = children[0];
		} else {
			props.children = children;
		}
	}
	return ReactElement(type, key, ref, props);
};

/**
 * jsDev() is similar to jsx() but it does not deal with children.
 */
export const jsxDev = (type: ElementType, config: unknown) => {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};
	for (const configKey in config as object) {
		const val = (config as Record<string, unknown>)[configKey];
		if (configKey === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (configKey === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, configKey)) {
			(props as Record<string, unknown>)[configKey] = val;
		}
	}
	return ReactElement(type, key, ref, props);
};
