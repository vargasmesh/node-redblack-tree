import { RedBlackTree, Node } from "../src/RedBlackTree";

test("rotate left", () => {
  /*
        7                             7
     /    \                        /     \
    4      11                     4      18 
   / \    /  \                   / \     /   \
  3   6  9    18        ->      3   6  11    19
 /          /    \             /      /    /    \
2         14      19          2      9    14    19
         /  \       \                    /  \     \
        12   17     22                  12   17   22
                   /                             /
                  20                           20
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

  tree.leftRotate(tree.root?.right as Node);

  const node18 = tree.root?.right as Node;

  expect(node18.key).toBe(18);
  expect(node18.left?.key).toBe(11);
  expect(node18.left?.right?.key).toBe(14);
});
