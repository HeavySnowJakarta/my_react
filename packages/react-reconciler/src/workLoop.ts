import { FiberNode } from "./fiber";

let workInProgress: FiberNode | null = null;

function renderRoot(root: FiberNode) {
  
}

function prepareFreshStack(root: FiberNode) {
  workInProgress = root;
}

function workLoop() {
  while (workInProgress !=  null) {
    
  }
}

function performUnitOfWork(fiber: FiberNode) {
  const next = beginWork(fiber);
  fiber.memoizedProps = fiber.pendingProps;
  
  
}

function completeUnitOfWork(fiber: FiberNode) {
  let node: FiberNode | null = fiber;
  do {
    completeWork(node);
  }
}