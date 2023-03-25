import { Node } from "./RedBlackTree";

const addToArray = (arr: number[]) => (key: number) => arr.push(key);

type TraversalFunc = (key: number) => void;

const inorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node === null) {
    return;
  }
  inorder(node.left, f);
  f(node.key);
  inorder(node.right, f);
};

const postorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node === null) {
    return;
  }
  postorder(node.left, f);
  postorder(node.right, f);
  f(node.key);
};

const preorder = (node?: Node, f: TraversalFunc = console.log) => {
  if (node === null) {
    return;
  }
  f(node.key);
  preorder(node.left, f);
  preorder(node.right, f);
};

export { inorder, postorder, preorder, addToArray };
