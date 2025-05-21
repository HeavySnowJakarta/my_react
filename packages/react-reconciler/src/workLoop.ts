import { FiberNode } from './fiber';
import { beginWork } from './beginWork';
import { completeWork } from './completeWork';

/**
 * Current work-in-progress fiber node being processed
 */
let workInProgress: FiberNode | null = null;

/** Initialize and then do the workloop. */
function renderRoot(root: FiberNode) {
	prepareFreshStack(root);
	try {
		workLoop();
	} catch (error) {
		console.error('Error during rendering:', error);
	}
}

/* Initialize the `workInProgress` fiber tree as the provided root */
function prepareFreshStack(root: FiberNode) {
	workInProgress = root;
}

/** While `workInProgress` exists, deal with it */
function workLoop() {
	while (workInProgress != null) {
		performUnitOfWork(workInProgress);
	}
}

/** First deal with children nodes, then siblings and the parent */
function performUnitOfWork(fiber: FiberNode) {
	// Compare and update the children fiber node, then update the pending
	// props as the memoized props.
	const next = beginWork(fiber);
	fiber.memoizedProps = fiber.pendingProps;

	// When no child node, iterate to the next sibling node or parent node.
	if (next === null) {
		// No child node, so we need to complete the work
		completeUnitOfWork(fiber);
	} else {
		// There is a child node, so we need to start working on it
		workInProgress = next;
	}
}

/** Iterate the silbing or parent node */
function completeUnitOfWork(fiber: FiberNode) {
	let node: FiberNode | null = fiber;
	do {
		completeWork(node);
		// See if sibling node exists
		const sibling = node?.sibling;
		if (sibling !== null) {
			// If sibling node exists, start working on it
			workInProgress = sibling!;
			return;
		}
		// Or, node = node.return
		node = node?.return ?? null;
	} while (node !== null);
}
