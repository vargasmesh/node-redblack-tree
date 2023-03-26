import { Node } from "./RedBlackTree";

const addToArray = (arr: number[]) => (node: Node) => arr.push(node.key);

type TraversalFunc = (node: Node) => void;

const inorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node.key === null) {
    return;
  }
  inorder(node.left, f);
  f(node);
  inorder(node.right, f);
};

const postorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node.key === null) {
    return;
  }
  postorder(node.left, f);
  postorder(node.right, f);
  f(node);
};

const preorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node.key === null) {
    return;
  }
  f(node);
  preorder(node.left, f);
  preorder(node.right, f);
};

export { inorder, postorder, preorder, addToArray };
