import { RedBlackTree, Node } from "../src/RedBlackTree";
import { preorder } from "../src/traversal";

const addToKeyColor = (arr) => (node: Node) =>
  arr.push({ key: node.key, color: node.color });

test("insert", () => {
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

  const expected = [
    {
      key: 7,
      color: "black",
    },
    {
      key: 4,
      color: "black",
    },
    {
      key: 3,
      color: "black",
    },
    {
      key: 2,
      color: "red",
    },
    {
      key: 6,
      color: "black",
    },
    {
      key: 11,
      color: "black",
    },
    {
      key: 9,
      color: "black",
    },
    {
      key: 18,
      color: "red",
    },
    {
      key: 14,
      color: "black",
    },
    {
      key: 12,
      color: "red",
    },
    {
      key: 17,
      color: "red",
    },
    {
      key: 20,
      color: "black",
    },
    {
      key: 19,
      color: "red",
    },
    {
      key: 22,
      color: "red",
    },
  ];

  const result = [];
  preorder(tree.root, addToKeyColor(result));

  expect(expected).toEqual(result);
});
