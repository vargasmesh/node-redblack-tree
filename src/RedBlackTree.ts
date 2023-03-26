enum Color {
  RED = "red",
  BLACK = "black",
}

class Node {
  key: number;
  color: Color;
  left: Node;
  right: Node;
  parent: Node;

  constructor(key: number, color: Color = Color.BLACK) {
    this.key = key;
    this.color = color;
  }
}

class RedBlackTree {
  public nil: Node;
  public root: Node;

  constructor() {
    this.nil = new Node(null, Color.BLACK);
    this.root = this.nil;
  }

  public leftRotate(x: Node) {
    const y = x.right;
    x.right = y.left;

    if (y.left !== this.nil) {
      y.left.parent = x;
    }

    y.parent = x.parent;

    if (x.parent === this.nil) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }

    y.left = x;
    x.parent = y;
  }

  public rightRotate(x: Node) {
    const y = x.left;
    x.left = y.right;

    if (y.right !== this.nil) {
      y.right.parent = x;
    }

    y.parent = x.parent;

    if (x.parent === this.nil) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }

    y.right = x;
    x.parent = y;
  }

  private insertFixup(z: Node) {
    while (z.parent.color === Color.RED) {
      if (z.parent === z.parent.parent.left) {
        const y = z.parent.parent.right;

        if (y.color === Color.RED) {
          z.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          z.parent.parent.color = Color.RED;
          z = z.parent.parent;
        } else {
          if (z === z.parent.right) {
            z = z.parent;
            this.leftRotate(z);
          }

          z.parent.color = Color.BLACK;
          z.parent.parent.color = Color.RED;
          this.rightRotate(z.parent.parent);
        }
      } else {
        const y = z.parent.parent.left;

        if (y.color === Color.RED) {
          z.parent.color = Color.BLACK;
          y.color = Color.BLACK;
          z.parent.parent.color = Color.RED;
          z = z.parent.parent;
        } else {
          if (z === z.parent.left) {
            z = z.parent;
            this.rightRotate(z);
          }

          z.parent.color = Color.BLACK;
          z.parent.parent.color = Color.RED;
          this.leftRotate(z.parent.parent);
        }
      }
    }

    this.root.color = Color.BLACK;
  }

  public insert(key: number): RedBlackTree {
    const newNode = new Node(key, Color.RED);
    let parent = this.nil;
    let currentNode = this.root;

    while (currentNode !== this.nil) {
      parent = currentNode;

      if (newNode.key < currentNode.key) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    newNode.parent = parent;

    if (parent === this.nil) {
      this.root = newNode;
    } else if (newNode.key < parent.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    newNode.left = this.nil;
    newNode.right = this.nil;
    newNode.color = Color.RED;

    this.insertFixup(newNode);

    return this;
  }
}

export { RedBlackTree, Node };
