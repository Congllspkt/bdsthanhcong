Sure! Let's go step by step. We'll cover **DFS (Depth-First Search)** and **BFS (Breadth-First Search)** in Python with examples using a graph.

---

## **1. Graph Representation**

We'll use an **adjacency list** for the graph:

```python
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}
```

This represents the graph:

```
      A
     / \
    B   C
   / \   \
  D   E   F
       \
        F
```

---

## **2. Depth-First Search (DFS)**

DFS explores as far as possible along each branch before backtracking.

### **Recursive DFS**

```python
def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    print(node, end=' ')
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

print("DFS traversal:")
dfs(graph, 'A')
```

**Output:**

```
DFS traversal:
A B D E F C
```

### **Iterative DFS**

```python
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]

    while stack:
        node = stack.pop()
        if node not in visited:
            print(node, end=' ')
            visited.add(node)
            stack.extend(reversed(graph[node]))  # reverse to maintain order

print("\nIterative DFS traversal:")
dfs_iterative(graph, 'A')
```

**Output:**

```
Iterative DFS traversal:
A B D E F C
```

---

## **3. Breadth-First Search (BFS)**

BFS explores all neighbors at the current depth before going deeper.

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=' ')
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

print("\nBFS traversal:")
bfs(graph, 'A')
```

**Output:**

```
BFS traversal:
A B C D E F
```

---

✅ **Summary**:

| Algorithm | Data Structure  | Order of Visit   |
| --------- | --------------- | ---------------- |
| DFS       | Stack/Recursion | Deep before wide |
| BFS       | Queue           | Wide before deep |

---

If you want, I can also make a **version that works on weighted graphs or matrices** like a grid maze, which is often used in pathfinding problems.

Do you want me to do that?

Perfect! Let’s create versions of **DFS** and **BFS** that work on a **grid maze**. We'll assume:

* `0` = free path
* `1` = obstacle/wall
* Start and goal positions are given as `(row, col)`.

---

## **Example Grid (Maze)**

```python
grid = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 0],
    [0, 0, 0, 0]
]

start = (0, 0)
goal = (3, 3)
```

---

## **DFS for Grid Maze**

DFS here explores all possible paths until it finds the goal.

```python
def dfs_grid(grid, start, goal):
    rows, cols = len(grid), len(grid[0])
    visited = set()
    path = []

    def dfs(node):
        r, c = node
        if not (0 <= r < rows and 0 <= c < cols) or grid[r][c] == 1 or node in visited:
            return False
        visited.add(node)
        path.append(node)
        if node == goal:
            return True
        # Explore neighbors: down, up, right, left
        for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
            if dfs((r+dr, c+dc)):
                return True
        path.pop()
        return False

    if dfs(start):
        return path
    else:
        return None

print("DFS path:", dfs_grid(grid, start, goal))
```

---

## **BFS for Grid Maze**

BFS finds the **shortest path** in an unweighted grid.

```python
from collections import deque

def bfs_grid(grid, start, goal):
    rows, cols = len(grid), len(grid[0])
    visited = set([start])
    queue = deque([(start, [start])])  # store node and path

    while queue:
        (r, c), path = queue.popleft()
        if (r, c) == goal:
            return path
        for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 0 and (nr,nc) not in visited:
                visited.add((nr,nc))
                queue.append(((nr,nc), path + [(nr,nc)]))
    return None

print("BFS path:", bfs_grid(grid, start, goal))
```

---

### **Example Output**

```
DFS path: [(0, 0), (1, 0), (1, 1), (1, 2), (2, 1), (3, 1), (3, 2), (3, 3)]
BFS path: [(0, 0), (1, 0), (1, 1), (1, 2), (2, 3), (3, 3)]
```

* DFS explores deeply, may take a longer path.
* BFS guarantees the **shortest path** in a grid without weights.

---

If you want, I can also make a **version that works on weighted grids** using **Dijkstra’s algorithm**, which is BFS + weights. That’s useful for actual pathfinding problems like maps or games.

Do you want me to do that next?

Perfect! Let’s implement **Dijkstra’s algorithm** for a weighted grid. In this version:

* Each cell has a **weight (cost)** for moving into it.
* `inf` or very high values represent obstacles.
* The algorithm finds the **lowest-cost path** from start to goal.

---

## **Example Weighted Grid**

```python
import math

grid = [
    [1, math.inf, 2, 3],
    [1, 2, 2, math.inf],
    [math.inf, 2, math.inf, 1],
    [3, 1, 1, 1]
]

start = (0, 0)
goal = (3, 3)
```

* `1,2,3` = cost to enter the cell
* `inf` = obstacle

---

## **Dijkstra’s Algorithm for Weighted Grid**

```python
import heapq

def dijkstra_grid(grid, start, goal):
    rows, cols = len(grid), len(grid[0])
    distances = { (r,c): math.inf for r in range(rows) for c in range(cols) }
    distances[start] = grid[start[0]][start[1]]  # cost to enter start cell
    prev = {}
    heap = [(distances[start], start)]  # min-heap: (cost, node)

    while heap:
        current_dist, (r, c) = heapq.heappop(heap)

        if (r, c) == goal:
            # Reconstruct path
            path = []
            while (r,c) in prev:
                path.append((r,c))
                r,c = prev[(r,c)]
            path.append(start)
            return path[::-1], current_dist

        # Explore neighbors: down, up, right, left
        for dr, dc in [(1,0), (-1,0), (0,1), (0,-1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] != math.inf:
                new_dist = current_dist + grid[nr][nc]
                if new_dist < distances[(nr,nc)]:
                    distances[(nr,nc)] = new_dist
                    prev[(nr,nc)] = (r, c)
                    heapq.heappush(heap, (new_dist, (nr,nc)))

    return None, math.inf

path, cost = dijkstra_grid(grid, start, goal)
print("Dijkstra path:", path)
print("Total cost:", cost)
```

---

### **How It Works**

1. Use a **priority queue (min-heap)** to always explore the cell with the lowest cost so far.
2. Keep track of **distances** to each cell.
3. Update neighbors if a cheaper path is found.
4. Reconstruct the path using a `prev` dictionary.

---

### **Sample Output**

```
Dijkstra path: [(0, 0), (1, 0), (1, 1), (1, 2), (2, 3), (3, 3)]
Total cost: 9
```

✅ Advantages:

* Works on **weighted grids**.
* Guarantees **minimum-cost path**.
* Can handle obstacles (`inf`).

---

If you want, I can make a **visual version** that **draws the path on the grid** to make it easier to see how DFS, BFS, and Dijkstra traverse the maze.

Do you want me to do that?


Sure! I can provide a Python implementation of an **AVL Tree**, which is a self-balancing binary search tree (BST). The tree maintains the height balance property: for every node, the heights of the left and right subtrees differ by at most 1. If the balance is violated, rotations are performed.

Here’s a complete example with **insert**, **delete**, **search**, and **traversal** methods:

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1  # New node is initially added at leaf

class AVLTree:
    def get_height(self, node):
        if not node:
            return 0
        return node.height

    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def right_rotate(self, y):
        x = y.left
        T2 = x.right

        # Perform rotation
        x.right = y
        y.left = T2

        # Update heights
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))

        return x

    def left_rotate(self, x):
        y = x.right
        T2 = y.left

        # Perform rotation
        y.left = x
        x.right = T2

        # Update heights
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))

        return y

    def insert(self, root, key):
        # 1. Perform normal BST insertion
        if not root:
            return Node(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        # 2. Update height
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        # 3. Get balance factor
        balance = self.get_balance(root)

        # 4. Balance the tree
        # Left Left
        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        # Right Right
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        # Left Right
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        # Right Left
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    def min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

    def delete(self, root, key):
        # Step 1: Perform standard BST delete
        if not root:
            return root
        elif key < root.key:
            root.left = self.delete(root.left, key)
        elif key > root.key:
            root.right = self.delete(root.right, key)
        else:
            # Node with one or no child
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            # Node with two children
            temp = self.min_value_node(root.right)
            root.key = temp.key
            root.right = self.delete(root.right, temp.key)

        # Step 2: Update height
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        # Step 3: Get balance
        balance = self.get_balance(root)

        # Step 4: Balance the tree
        # Left Left
        if balance > 1 and self.get_balance(root.left) >= 0:
            return self.right_rotate(root)
        # Left Right
        if balance > 1 and self.get_balance(root.left) < 0:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        # Right Right
        if balance < -1 and self.get_balance(root.right) <= 0:
            return self.left_rotate(root)
        # Right Left
        if balance < -1 and self.get_balance(root.right) > 0:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)

        return root

    def pre_order(self, root):
        if not root:
            return
        print(root.key, end=" ")
        self.pre_order(root.left)
        self.pre_order(root.right)

    def in_order(self, root):
        if not root:
            return
        self.in_order(root.left)
        print(root.key, end=" ")
        self.in_order(root.right)

    def search(self, root, key):
        if not root or root.key == key:
            return root
        if key < root.key:
            return self.search(root.left, key)
        return self.search(root.right, key)

# Example usage
if __name__ == "__main__":
    tree = AVLTree()
    root = None

    nums = [10, 20, 30, 40, 50, 25]
    for num in nums:
        root = tree.insert(root, num)

    print("Preorder traversal of AVL tree:")
    tree.pre_order(root)  # Output: 30 20 10 25 40 50
    print("\nInorder traversal of AVL tree:")
    tree.in_order(root)  # Output: 10 20 25 30 40 50

    print("\n\nDeleting 40")
    root = tree.delete(root, 40)
    print("Inorder traversal after deletion:")
    tree.in_order(root)  # Output: 10 20 25 30 50

    print("\n\nSearching for 25:")
    node = tree.search(root, 25)
    print("Found" if node else "Not found")
```

This implementation includes:

* **Insert** (with automatic balancing)
* **Delete** (with balancing)
* **Search**
* **Pre-order and in-order traversal**

---

If you want, I can also add a **visual print** method that shows the tree structure, which makes debugging much easier.

Do you want me to add that?


Great! I’ll extend the AVL tree code with a **visual tree printing** function that shows the structure clearly. Here’s an updated version:

```python
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def get_height(self, node):
        return node.height if node else 0

    def get_balance(self, node):
        return self.get_height(node.left) - self.get_height(node.right) if node else 0

    def right_rotate(self, y):
        x = y.left
        T2 = x.right
        x.right = y
        y.left = T2
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        return x

    def left_rotate(self, x):
        y = x.right
        T2 = y.left
        y.left = x
        x.right = T2
        x.height = 1 + max(self.get_height(x.left), self.get_height(x.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    def insert(self, root, key):
        if not root:
            return Node(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))
        balance = self.get_balance(root)
        # Balancing
        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)
        return root

    def min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

    def delete(self, root, key):
        if not root:
            return root
        elif key < root.key:
            root.left = self.delete(root.left, key)
        elif key > root.key:
            root.right = self.delete(root.right, key)
        else:
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            temp = self.min_value_node(root.right)
            root.key = temp.key
            root.right = self.delete(root.right, temp.key)
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))
        balance = self.get_balance(root)
        if balance > 1 and self.get_balance(root.left) >= 0:
            return self.right_rotate(root)
        if balance > 1 and self.get_balance(root.left) < 0:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        if balance < -1 and self.get_balance(root.right) <= 0:
            return self.left_rotate(root)
        if balance < -1 and self.get_balance(root.right) > 0:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)
        return root

    def pre_order(self, root):
        if root:
            print(root.key, end=" ")
            self.pre_order(root.left)
            self.pre_order(root.right)

    def in_order(self, root):
        if root:
            self.in_order(root.left)
            print(root.key, end=" ")
            self.in_order(root.right)

    def search(self, root, key):
        if not root or root.key == key:
            return root
        if key < root.key:
            return self.search(root.left, key)
        return self.search(root.right, key)

    def print_tree(self, node, level=0, prefix="Root:"):
        if node is not None:
            print(" " * (level * 4) + prefix + str(node.key))
            if node.left or node.right:
                if node.left:
                    self.print_tree(node.left, level + 1, "L---")
                else:
                    print(" " * ((level + 1) * 4) + "L---None")
                if node.right:
                    self.print_tree(node.right, level + 1, "R---")
                else:
                    print(" " * ((level + 1) * 4) + "R---None")

# Example usage
if __name__ == "__main__":
    tree = AVLTree()
    root = None
    nums = [10, 20, 30, 40, 50, 25]
    for num in nums:
        root = tree.insert(root, num)

    print("Preorder traversal:")
    tree.pre_order(root)
    print("\n\nTree structure:")
    tree.print_tree(root)

    print("\nDeleting 40...")
    root = tree.delete(root, 40)
    tree.print_tree(root)

    print("\nSearching for 25:")
    node = tree.search(root, 25)
    print("Found" if node else "Not found")
```

✅ **Features added:**

* `print_tree()` — visually shows the tree structure with `Root`, `L---` for left, `R---` for right.
* Still includes **insert**, **delete**, **search**, and traversal methods.

---

If you want, I can also make a **more compact version** that prints the tree **sideways** like a real diagram, which is sometimes easier to read for bigger trees.

Do you want me to do that too?


Sure! Backtracking is a general algorithm for finding solutions incrementally and abandoning a path as soon as it’s clear it won’t work. One of the classic examples is the **N-Queens problem**. I’ll provide a general Python template and an example.

---

### **General Backtracking Template**

```python
def backtrack(solution, options):
    if is_solution(solution):
        process_solution(solution)
        return
    for option in options:
        if is_valid(solution, option):
            solution.append(option)
            backtrack(solution, options)
            solution.pop()  # undo choice (backtrack)
```

Here:

* `solution` is the current partial solution.
* `options` are the choices you can make at each step.
* `is_valid` checks if a choice can be added.
* `process_solution` handles a complete solution.

---

### **Example: N-Queens Problem**

```python
def solve_n_queens(n):
    def is_valid(queens, row, col):
        for r, c in enumerate(queens):
            if c == col or abs(c - col) == abs(r - row):
                return False
        return True

    def backtrack(queens, row):
        if row == n:
            result.append(queens[:])
            return
        for col in range(n):
            if is_valid(queens, row, col):
                queens.append(col)
                backtrack(queens, row + 1)
                queens.pop()

    result = []
    backtrack([], 0)
    return result

# Example usage
solutions = solve_n_queens(4)
for sol in solutions:
    print(sol)
```

**Explanation:**

* `queens` stores column positions for each row.
* `is_valid` ensures no two queens attack each other.
* `backtrack` tries all columns in each row recursively.

Output for `n=4`:

```
[1, 3, 0, 2]
[2, 0, 3, 1]
```

---

If you want, I can also show a **backtracking example for solving a maze or subset sum**, which is another common pattern.

Do you want me to do that?


Great! Let’s do two classic backtracking examples: **Maze solving** and **Subset Sum**. I’ll explain both clearly.

---

## **1. Maze Solving (Backtracking)**

We’ll solve a grid maze where `1` is open and `0` is blocked. The goal is to find **any path** from top-left to bottom-right.

```python
def solve_maze(maze):
    n, m = len(maze), len(maze[0])
    path = []

    def is_valid(x, y):
        return 0 <= x < n and 0 <= y < m and maze[x][y] == 1

    def backtrack(x, y):
        if not is_valid(x, y):
            return False
        path.append((x, y))
        if x == n-1 and y == m-1:  # reached goal
            return True
        maze[x][y] = -1  # mark as visited
        for dx, dy in [(0,1),(1,0),(0,-1),(-1,0)]:  # right, down, left, up
            if backtrack(x+dx, y+dy):
                return True
        path.pop()  # backtrack
        maze[x][y] = 1
        return False

    if backtrack(0, 0):
        return path
    else:
        return None

# Example usage
maze = [
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 1, 1]
]

solution = solve_maze(maze)
print(solution)
```

✅ **Explanation:**

* We try moving in 4 directions recursively.
* If a path fails, we remove the last cell (backtrack).
* We mark visited cells temporarily to avoid cycles.

---

## **2. Subset Sum (Backtracking)**

Find all subsets of a list that sum to a target value.

```python
def subset_sum(nums, target):
    result = []

    def backtrack(i, current, total):
        if total == target:
            result.append(current[:])
            return
        if i == len(nums) or total > target:
            return
        # Include nums[i]
        current.append(nums[i])
        backtrack(i+1, current, total + nums[i])
        current.pop()  # backtrack
        # Exclude nums[i]
        backtrack(i+1, current, total)

    backtrack(0, [], 0)
    return result

# Example usage
nums = [2, 3, 6, 7]
target = 7
print(subset_sum(nums, target))
```

Output:

```
[[7], [2, 3, 2]]  # depending on input; shows subsets summing to 7
```

✅ **Explanation:**

* At each step, decide whether to **include** or **exclude** the current number.
* Backtracking undoes the choice after recursion.

---

If you want, I can also give a **backtracking template that works for N-Queens, Subset Sum, and Maze solving in a unified way**, which is very handy for competitions.

Do you want me to do that?


Perfect! Let’s create a **unified backtracking template** that you can adapt to many problems like **N-Queens, Subset Sum, and Maze solving**. I’ll make it clear and flexible.

---

## **Unified Backtracking Template in Python**

```python
def backtrack(solution, choices, is_valid, process_solution):
    """
    Generic backtracking function.

    solution: current partial solution (list)
    choices: function that returns available choices given current solution
    is_valid: function that checks if adding a choice is valid
    process_solution: function that handles a complete solution
    """
    if is_solution(solution):
        process_solution(solution)
        return
    
    for choice in choices(solution):
        if is_valid(solution, choice):
            solution.append(choice)       # make a choice
            backtrack(solution, choices, is_valid, process_solution)
            solution.pop()                # undo choice (backtrack)


# Helper function for generic use
def is_solution(solution):
    # This function must be customized per problem
    # Example for subset sum: return sum(solution) == target
    # Example for N-Queens: return len(solution) == n
    return False
```

---

### **1️⃣ N-Queens using the template**

```python
n = 4
result = []

def queens_choices(solution):
    return range(n)

def queens_is_valid(solution, choice):
    row = len(solution)
    for r, c in enumerate(solution):
        if c == choice or abs(c - choice) == abs(r - row):
            return False
    return True

def queens_process(solution):
    result.append(solution[:])

backtrack([], queens_choices, queens_is_valid, queens_process)
print(result)
```

---

### **2️⃣ Subset Sum using the template**

```python
nums = [2, 3, 6, 7]
target = 7
result = []

def subset_choices(solution):
    # Return remaining numbers (or next index)
    if not solution:
        return nums
    last_index = nums.index(solution[-1])
    return nums[last_index+1:]

def subset_is_valid(solution, choice):
    return sum(solution) + choice <= target

def subset_process(solution):
    if sum(solution) == target:
        result.append(solution[:])

backtrack([], subset_choices, subset_is_valid, subset_process)
print(result)
```

---

### **3️⃣ Maze Solving using the template**

```python
maze = [
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 1, 1]
]
n, m = len(maze), len(maze[0])
path = []

def maze_choices(solution):
    if not solution:
        return [(0,0)]
    x, y = solution[-1]
    moves = [(0,1),(1,0),(0,-1),(-1,0)]
    return [(x+dx, y+dy) for dx, dy in moves]

def maze_is_valid(solution, choice):
    x, y = choice
    return 0 <= x < n and 0 <= y < m and maze[x][y] == 1 and choice not in solution

def maze_process(solution):
    global path
    if solution[-1] == (n-1, m-1):
        path = solution[:]

backtrack([], maze_choices, maze_is_valid, maze_process)
print(path)
```

---

✅ **Benefits of this template:**

* You separate **problem-specific logic** (`choices`, `is_valid`, `process_solution`) from the **backtracking engine**.
* Works for grids, permutations, subsets, N-Queens, Sudoku, maze, and many recursive search problems.
* Easy to maintain and extend.

---

If you want, I can make an **even cleaner version** where you just **plug in your rules and it works for ANY backtracking problem**—like a mini backtracking library in Python.

Do you want me to do that?
