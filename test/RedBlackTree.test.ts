import { RedBlackTree, Node } from "../src/RedBlackTree";
import { preorder, addToArray } from "../src/traversal";

test("rotate left", () => {
  /*
        7                             7
     /    \                        /     \
    4      11                     4       18 
   / \    /  \                   / \     /   \
  3   6  9    18        ->      3   6  11     19
 /          /    \             /      /     /    \
2         14      19          2      9     14     22
         /  \       \                     /  \    /
        12   17     22                   12   17 20
                   /                             
                  20
*/
  const tree = new RedBlackTree()
    .insert(7)
    .insert(4)
    .insert(3)
    .insert(6)
    .insert(2)
    .insert(11)
    .insert(9)
    .insert(18)
    .insert(14)
    .insert(19)
    .insert(12)
    .insert(17)
    .insert(22)
    .insert(20);

  const expected = [7, 4, 3, 2, 6, 11, 9, 18, 14, 12, 17, 19, 22, 20];
  const result = [];
  preorder(tree.root, addToArray(result));

  tree.leftRotate(tree.root?.right as Node);

  const node18 = tree.root?.right as Node;

  expect(node18.key).toBe(18);
  expect(node18.left?.key).toBe(11);
  expect(node18.left?.right?.key).toBe(14);
  expect(expected).toEqual(result);
});

test("rotate right", () => {
  const input = [10, 5, 2, 8, 6, 9, 12];
  const expected = [5, 2, 10, 8, 6, 9, 12];

  const tree = new RedBlackTree();
  input.forEach((key) => tree.insert(key));

  tree.rightRotate(tree.root as Node);
  const result = [];
  preorder(tree.root, addToArray(result));
  expect(expected).toEqual(result);
});
