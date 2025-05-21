import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { NoFlags, Flags } from './fiberFlags';

/**
 * Represents a node in the Fiber tree structure.
 * Fiber is React's reconciliation algorithm implementation,
 * which enables incremental rendering and work prioritization.
 * @class FiberNode
 * @property {WorkTag} tag - Type of fiber (e.g., function, class)
 * @property {Key} key - Unique identifier for the element
 * @property {unknown} stateNode - Host component instance
 * @property {unknown} type - Element type (function/class)
 * @property {FiberNode | null} return - Parent fiber node
 * @property {FiberNode | null} sibling - Next sibling fiber
 * @property {FiberNode | null} child - First child fiber
 * @property {number} index - Position among siblings
 * @property {Ref} ref - Reference to the actual DOM node
 * @property {Props} pendingProps - Props to be applied
 * @property {Props | null} memoizedProps - Previous props
 * @property {unknown} memoizedState - Previous state
 * @property {FiberNode | null} alternate - Work in progress copy
 * @property {Flags} flags - Side effects to be applied
 * @property {Flags} subtreeFlags - Combined child effects
 * @property {unknown} updateQueue - Queued state updates
 */
export class FiberNode {
	tag: WorkTag;
	key: Key;
	stateNode: unknown;
	type: unknown;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	ref: Ref;
	pendingProps: Props;
	memoizedProps: Props | null;
	memoizedState: unknown;
	alternate: FiberNode | null;
	flags: Flags;
	subtreeFlags: Flags;
	updateQueue: unknown;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;

		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;
		this.ref = null;

		this.pendingProps = pendingProps;
		this.memoizedProps = null;
		this.memoizedState = null;

		this.alternate = null;
		this.flags = NoFlags;
		this.subtreeFlags = NoFlags;
		this.updateQueue = null;
	}
}
