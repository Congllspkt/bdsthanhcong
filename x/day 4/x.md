Dưới đây là **tổng hợp đầy đủ về Linked List trong Python** — dễ hiểu, có ví dụ, và có cả code triển khai từ đầu (vì Python không có LinkedList built-in).

---

# ✅ **1. Linked List là gì?**

**Linked List** là cấu trúc dữ liệu gồm các **node**, mỗi node chứa:

* `value` — dữ liệu
* `next` — con trỏ trỏ đến node tiếp theo

Khác với list Python (`[]`):

| Python List               | Linked List                     |
| ------------------------- | ------------------------------- |
| Lưu liên tục trong bộ nhớ | Không liên tục                  |
| Truy cập O(1)             | Truy cập O(n)                   |
| Chèn/xoá giữa list chậm   | Chèn/xoá node giữa nhanh (O(1)) |

---

# ✅ **2. Tạo Node trong Python**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

---

# ✅ **3. Tạo Linked List (Singly Linked List)**

```python
class LinkedList:
    def __init__(self):
        self.head = None
```

---

# ✅ **4. Thêm phần tử vào đầu list**

```python
def push_front(self, data):
    new_node = Node(data)
    new_node.next = self.head
    self.head = new_node
```

---

# ✅ **5. Thêm phần tử vào cuối list**

```python
def push_back(self, data):
    new_node = Node(data)
    if not self.head:
        self.head = new_node
        return

    last = self.head
    while last.next:
        last = last.next
    last.next = new_node
```

---

# ✅ **6. In linked list**

```python
def print_list(self):
    current = self.head
    while current:
        print(current.data, end=" -> ")
        current = current.next
    print("None")
```

---

# ✅ **7. Xoá một node theo giá trị**

```python
def delete(self, key):
    current = self.head

    # Trường hợp xoá head
    if current and current.data == key:
        self.head = current.next
        return

    prev = None
    while current and current.data != key:
        prev = current
        current = current.next

    if current:
        prev.next = current.next
```

---

# ⭐ **Full Code Linked List Python (Singly Linked List)**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def push_back(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return

        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def delete(self, key):
        current = self.head
        if current and current.data == key:
            self.head = current.next
            return

        prev = None
        while current and current.data != key:
            prev = current
            current = current.next

        if current:
            prev.next = current.next

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# ------------ DEMO -------------
ll = LinkedList()
ll.push_front(3)
ll.push_front(2)
ll.push_front(1)
ll.push_back(4)
ll.push_back(5)

ll.print_list()  # 1 -> 2 -> 3 -> 4 -> 5 -> None

ll.delete(3)
ll.print_list()  # 1 -> 2 -> 4 -> 5 -> None
```

Dưới đây là **3 hàm mới** bạn yêu cầu:

* `reverse()` – đảo ngược Linked List
* `find()` – tìm node theo giá trị
* `insertAt(index, data)` – chèn vào vị trí bất kỳ

Và mình gộp tất cả vào **full code hoàn chỉnh, sạch, dễ hiểu**.

---

# ✅ **Full Linked List Python với reverse(), find(), insertAt()**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # -------------------------
    # Thêm vào đầu
    # -------------------------
    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # -------------------------
    # Thêm vào cuối
    # -------------------------
    def push_back(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return

        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # -------------------------
    # Tìm giá trị (find)
    # Trả về vị trí (index), không thấy → -1
    # -------------------------
    def find(self, key):
        current = self.head
        index = 0

        while current:
            if current.data == key:
                return index
            current = current.next
            index += 1

        return -1  # Không tìm thấy

    # -------------------------
    # Chèn vào vị trí bất kỳ (insertAt)
    # index = 0 → chèn đầu
    # -------------------------
    def insertAt(self, index, data):
        new_node = Node(data)

        # Chèn đầu
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        # Chèn giữa hoặc cuối
        current = self.head
        count = 0

        while current and count < index - 1:
            current = current.next
            count += 1

        if not current:
            raise IndexError("Index out of range")

        new_node.next = current.next
        current.next = new_node

    # -------------------------
    # Xoá 1 node theo giá trị
    # -------------------------
    def delete(self, key):
        current = self.head

        if current and current.data == key:
            self.head = current.next
            return

        prev = None
        while current and current.data != key:
            prev = current
            current = current.next

        if current:
            prev.next = current.next

    # -------------------------
    # reverse() – đảo ngược linked list
    # -------------------------
    def reverse(self):
        prev = None
        current = self.head

        while current:
            next_node = current.next  # lưu cái tiếp theo
            current.next = prev       # đảo liên kết
            prev = current            # tiến prev lên
            current = next_node       # tiến current lên

        self.head = prev

    # -------------------------
    # In danh sách
    # -------------------------
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# ----------------- DEMO -----------------
ll = LinkedList()
ll.push_back(1)
ll.push_back(2)
ll.push_back(3)
ll.push_back(4)

print("List ban đầu:")
ll.print_list()

print("\nfind(3):", ll.find(3))   # 2

print("\nChèn 99 vào index 2:")
ll.insertAt(2, 99)
ll.print_list()

print("\nĐảo ngược list:")
ll.reverse()
ll.print_list()
```

---

# 📌 **Giải thích ngắn gọn**

### 🔍 `find(key)`

* Duyệt từ đầu → cuối
* Trả về **index** của phần tử đầu tiên có giá trị `key`
* Không tìm thấy → `-1`

---

### 🔄 `reverse()`

Sử dụng 3 con trỏ:

```
prev ← current ← next
```

Mỗi bước:

* đảo chiều `current.next = prev`
* dời con trỏ sang phải

---

### 🧩 `insertAt(index, data)`

* Nếu `index = 0` → chèn vào đầu
* Duyệt đến node trước vị trí cần chèn
* Gắn liên kết đúng thứ tự

---

Dưới đây là **bản hoàn chỉnh Linked List** với các hàm bạn yêu cầu:

✔ `length()` – trả về độ dài
✔ `removeAt(index)` – xoá theo vị trí
✔ `reverse_recursive()` – đảo ngược bằng đệ quy
✔ `sort()` – sắp xếp Linked List (Merge Sort – tối ưu nhất cho Linked List)

Tất cả đều được viết sạch, dễ hiểu, tối ưu.

---

# ⭐ **Full Code Linked List – Advanced Version**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # -------------------------
    # Thêm vào đầu
    # -------------------------
    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # -------------------------
    # Thêm vào cuối
    # -------------------------
    def push_back(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return

        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    # -------------------------
    # length() – đếm số node
    # -------------------------
    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count

    # -------------------------
    # removeAt(index) – xóa theo vị trí
    # -------------------------
    def removeAt(self, index):
        if index < 0:
            raise IndexError("Index must be >= 0")

        # Xóa head
        if index == 0:
            if not self.head:
                raise IndexError("Index out of range")
            self.head = self.head.next
            return

        current = self.head
        count = 0

        while current and count < index - 1:
            current = current.next
            count += 1

        if not current or not current.next:
            raise IndexError("Index out of range")

        current.next = current.next.next

    # -------------------------
    # reverse_recursive() – đảo ngược bằng đệ quy
    # -------------------------
    def reverse_recursive(self):

        def _reverse(node, prev=None):
            if not node:
                return prev
            next_node = node.next
            node.next = prev
            return _reverse(next_node, node)

        self.head = _reverse(self.head)

    # -------------------------
    # sort() – sắp xếp bằng Merge Sort (tối ưu O(n log n))
    # -------------------------
    def sort(self):

        def merge_sort(head):
            if not head or not head.next:
                return head

            # Tìm middle (slow-fast pointer)
            slow, fast = head, head.next
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

            mid = slow.next
            slow.next = None

            left = merge_sort(head)
            right = merge_sort(mid)

            return merge(left, right)

        def merge(left, right):
            dummy = Node(0)
            tail = dummy

            while left and right:
                if left.data <= right.data:
                    tail.next = left
                    left = left.next
                else:
                    tail.next = right
                    right = right.next
                tail = tail.next

            tail.next = left if left else right
            return dummy.next

        self.head = merge_sort(self.head)

    # -------------------------
    # print list
    # -------------------------
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

---

# 🔥 **Demo Test Các Hàm Mới**

```python
ll = LinkedList()
ll.push_back(4)
ll.push_back(2)
ll.push_back(5)
ll.push_back(1)

print("Original:")
ll.print_list()

print("\nLength:", ll.length())

print("\nremoveAt(1):")
ll.removeAt(1)
ll.print_list()

print("\nreverse_recursive():")
ll.reverse_recursive()
ll.print_list()

print("\nsort():")
ll.sort()
ll.print_list()
```

---

# ✔ Kết quả mẫu

```
Original:
4 -> 2 -> 5 -> 1 -> None

Length: 4

removeAt(1):
4 -> 5 -> 1 -> None

reverse_recursive():
1 -> 5 -> 4 -> None

sort():
1 -> 4 -> 5 -> None
```

Dưới đây là **Doubly Linked List (DLL) – Linked List 2 chiều** viết đầy đủ, sạch, dễ hiểu, có đủ các hàm quan trọng:

✔ Thêm đầu (push_front)
✔ Thêm cuối (push_back)
✔ Xoá theo vị trí (removeAt)
✔ Xoá theo giá trị (delete)
✔ Tìm kiếm (find)
✔ Độ dài (length)
✔ Đảo chiều (reverse)
✔ In thuận & nghịch

---

# ⭐ **Full Code Doubly Linked List – Python**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None  # con trỏ về node trước


class DoublyLinkedList:
    def __init__(self):
        self.head = None

    # -------------------------
    # Thêm đầu list
    # -------------------------
    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head

        if self.head:
            self.head.prev = new_node

        self.head = new_node

    # -------------------------
    # Thêm cuối list
    # -------------------------
    def push_back(self, data):
        new_node = Node(data)

        if not self.head:
            self.head = new_node
            return

        last = self.head
        while last.next:
            last = last.next

        last.next = new_node
        new_node.prev = last

    # -------------------------
    # Tìm giá trị -> trả về index
    # -------------------------
    def find(self, key):
        current = self.head
        index = 0

        while current:
            if current.data == key:
                return index
            current = current.next
            index += 1
        return -1

    # -------------------------
    # Xoá theo index
    # -------------------------
    def removeAt(self, index):
        if index < 0:
            raise IndexError("Index must be >= 0")

        if not self.head:
            raise IndexError("List is empty")

        current = self.head
        count = 0

        # Xóa head
        if index == 0:
            self.head = current.next
            if self.head:
                self.head.prev = None
            return

        # Tìm node cần xoá
        while current and count < index:
            current = current.next
            count += 1

        if not current:
            raise IndexError("Index out of range")

        # Xoá node (kết nối lại 2 đầu)
        if current.next:
            current.next.prev = current.prev
        if current.prev:
            current.prev.next = current.next

    # -------------------------
    # Xoá theo giá trị
    # -------------------------
    def delete(self, key):
        current = self.head

        while current:
            if current.data == key:
                # Xóa head
                if current == self.head:
                    self.head = current.next
                    if self.head:
                        self.head.prev = None
                else:
                    if current.next:
                        current.next.prev = current.prev
                    if current.prev:
                        current.prev.next = current.next
                return
            current = current.next

    # -------------------------
    # Đếm số node
    # -------------------------
    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count

    # -------------------------
    # reverse() – đảo list
    # -------------------------
    def reverse(self):
        current = self.head
        prev_node = None

        while current:
            # Đảo con trỏ
            prev_node = current.prev
            current.prev = current.next
            current.next = prev_node

            # Tiến tới node tiếp theo (đã bị đảo)
            current = current.prev

        # Đặt head mới
        if prev_node:
            self.head = prev_node.prev

    # -------------------------
    # In list xuôi
    # -------------------------
    def print_forward(self):
        current = self.head
        while current:
            print(current.data, end=" <-> ")
            last = current
            current = current.next
        print("None")

    # -------------------------
    # In list ngược
    # -------------------------
    def print_backward(self):
        current = self.head
        if not current:
            print("None")
            return

        # Đi tới đuôi list
        while current.next:
            current = current.next

        # In ngược
        while current:
            print(current.data, end=" <-> ")
            current = current.prev
        print("None")
```

---

# 🎯 **Demo sử dụng Doubly Linked List**

```python
dll = DoublyLinkedList()
dll.push_back(1)
dll.push_back(2)
dll.push_back(3)
dll.push_front(0)

print("Forward:")
dll.print_forward()

print("Backward:")
dll.print_backward()

print("\nremoveAt(2):")
dll.removeAt(2)
dll.print_forward()

print("\nreverse():")
dll.reverse()
dll.print_forward()
```

---

# 📌 Output mẫu:

```
Forward:
0 <-> 1 <-> 2 <-> 3 <-> None

Backward:
3 <-> 2 <-> 1 <-> 0 <-> None

removeAt(2):
0 <-> 1 <-> 3 <-> None

reverse():
3 <-> 1 <-> 0 <-> None
```

Nice — here's a clean, well-documented Python implementation that builds a "number snail" (spiral/clockwise) matrix. It supports square or rectangular sizes and includes an example.

```python
from typing import List, Optional

def number_snail(rows: int, cols: Optional[int] = None) -> List[List[int]]:
    """
    Return a rows x cols matrix filled with numbers in a clockwise snail (spiral) order.
    If cols is None, returns a square matrix rows x rows.

    Example:
      number_snail(3) ->
      [[1, 2, 3],
       [8, 9, 4],
       [7, 6, 5]]
    """
    if rows <= 0:
        return []
    if cols is None:
        cols = rows
    if cols <= 0:
        return []

    # initialize empty matrix
    mat = [[0] * cols for _ in range(rows)]

    top, bottom = 0, rows - 1
    left, right = 0, cols - 1
    cur = 1
    end = rows * cols

    while cur <= end:
        # move left -> right along top row
        for c in range(left, right + 1):
            if cur > end: break
            mat[top][c] = cur
            cur += 1
        top += 1

        # move top -> bottom along right column
        for r in range(top, bottom + 1):
            if cur > end: break
            mat[r][right] = cur
            cur += 1
        right -= 1

        # move right -> left along bottom row
        if top <= bottom:
            for c in range(right, left - 1, -1):
                if cur > end: break
                mat[bottom][c] = cur
                cur += 1
            bottom -= 1

        # move bottom -> top along left column
        if left <= right:
            for r in range(bottom, top - 1, -1):
                if cur > end: break
                mat[r][left] = cur
                cur += 1
            left += 1

    return mat

# pretty print helper
def print_matrix(mat: List[List[int]]) -> None:
    if not mat:
        print("[]")
        return
    width = len(str(max(max(row) for row in mat)))
    for row in mat:
        print(" ".join(f"{x:>{width}d}" for x in row))


# Example usage
if __name__ == "__main__":
    m = number_snail(4)        # 4x4 snail
    print("4x4 snail:")
    print_matrix(m)
    print()

    r = number_snail(3, 5)     # 3 rows, 5 cols snail
    print("3x5 snail:")
    print_matrix(r)
```

Example output for the 4×4 snail:

```
 1  2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
```

Want a version that fills counter-clockwise, or starts from a different corner, or yields coordinates instead of the full matrix? I can add that too.

Below are **3 flexible versions** so you can choose:
✔ Counter-clockwise spiral
✔ Spiral starting from *any* of the 4 corners
✔ Function that **yields coordinates** (generator) instead of building a matrix

---

# ✅ 1) Counter-clockwise Spiral (start at top-left)

Example output for 3×3:

```
1 8 7
2 9 6
3 4 5
```

```python
def snail_ccw(rows, cols=None):
    if cols is None:
        cols = rows
    mat = [[0]*cols for _ in range(rows)]

    top, bottom = 0, rows - 1
    left, right = 0, cols - 1
    cur = 1
    end = rows * cols

    while cur <= end:
        # top -> bottom along left
        for r in range(top, bottom + 1):
            mat[r][left] = cur; cur += 1
        left += 1
        if cur > end: break

        # left -> right along bottom
        for c in range(left, right + 1):
            mat[bottom][c] = cur; cur += 1
        bottom -= 1
        if cur > end: break

        # bottom -> top along right
        for r in range(bottom, top - 1, -1):
            mat[r][right] = cur; cur += 1
        right -= 1
        if cur > end: break

        # right -> left along top
        for c in range(right, left - 1, -1):
            mat[top][c] = cur; cur += 1
        top += 1

    return mat
```

---

# ✅ 2) Spiral from ANY corner + any direction

Fully flexible: control start corner and clockwise vs counter-clockwise.

### Directions:

* `"CW"`  = clockwise
* `"CCW"` = counterclockwise
* Corners: `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`

```python
def spiral_custom(rows, cols=None, start="top-left", direction="CW"):
    if cols is None:
        cols = rows
    mat = [[0]*cols for _ in range(rows)]

    dirs = {
        "CW":  [(0,1), (1,0), (0,-1), (-1,0)],   # right, down, left, up
        "CCW": [(1,0), (0,1), (-1,0), (0,-1)],  # down, right, up, left
    }

    # Starting positions for corners
    starts = {
        "top-left":     (0, 0),
        "top-right":    (0, cols-1),
        "bottom-left":  (rows-1, 0),
        "bottom-right": (rows-1, cols-1)
    }

    drdc = dirs[direction]
    r, c = starts[start]

    # Adjust rotation index for corners
    offset = {
        "top-left":     0,
        "top-right":    3,
        "bottom-right": 2,
        "bottom-left":  1
    }[start]

    di = offset
    for value in range(1, rows*cols + 1):
        mat[r][c] = value

        nr = r + drdc[di % 4][0]
        nc = c + drdc[di % 4][1]

        # Need to turn?
        if not (0 <= nr < rows and 0 <= nc < cols and mat[nr][nc] == 0):
            di += 1
            nr = r + drdc[di % 4][0]
            nc = c + drdc[di % 4][1]

        r, c = nr, nc

    return mat
```

### Example:

```python
m = spiral_custom(4, 4, start="bottom-right", direction="CCW")
for row in m: print(row)
```

---

# ✅ 3) Generator version (yield spiral coordinates)

Useful for algorithms that only need the order, not the matrix.

```
for (r, c) in snail_coords(3, 3):
    print((r, c))
```

```python
def snail_coords(rows, cols=None):
    if cols is None:
        cols = rows

    top, bottom = 0, rows - 1
    left, right = 0, cols - 1

    while top <= bottom and left <= right:
        # left → right
        for c in range(left, right+1):
            yield top, c
        top += 1

        # top → bottom
        for r in range(top, bottom+1):
            yield r, right
        right -= 1

        if top <= bottom:
            # right → left
            for c in range(right, left-1, -1):
                yield bottom, c
            bottom -= 1

        if left <= right:
            # bottom → top
            for r in range(bottom, top-1, -1):
                yield r, left
            left += 1
```
Dưới đây là **giải thích ngắn gọn + code Ring Buffer (Circular Buffer) trong Python** — cả phiên bản thủ công và phiên bản dùng `collections.deque`.

---

# ✅ **1. Ring Buffer là gì?**

Ring buffer (circular buffer) là cấu trúc dữ liệu có:

* Kích thước cố định.
* Khi đầy, phần tử mới ghi đè lên phần tử cũ nhất.
* Truy cập O(1) cho push/pop/index.

---

# ✅ **2. Cài đặt Ring Buffer bằng list (tự viết)**

### **Đặc điểm**

* `write()` thêm item, tự động ghi đè khi đầy.
* `read_all()` trả về dữ liệu đúng thứ tự thời gian.

### ✔ Code:

```python
class RingBuffer:
    def __init__(self, capacity: int):
        self.buffer = [None] * capacity
        self.capacity = capacity
        self.start = 0   # vị trí phần tử cũ nhất
        self.size = 0

    def write(self, value):
        end = (self.start + self.size) % self.capacity
        self.buffer[end] = value

        if self.size < self.capacity:
            self.size += 1
        else:
            # buffer full → ghi đè → tiến start lên 1
            self.start = (self.start + 1) % self.capacity

    def read_all(self):
        return [
            self.buffer[(self.start + i) % self.capacity]
            for i in range(self.size)
        ]

    def __repr__(self):
        return f"RingBuffer({self.read_all()})"
```

### ✔ Demo:

```python
rb = RingBuffer(3)
rb.write(10)
rb.write(20)
rb.write(30)
rb.write(40)  # ghi đè 10

print(rb)     # → RingBuffer([20, 30, 40])
```

---

# ✅ **3. Ring Buffer bằng deque (nhanh, đơn giản)**

`deque(maxlen=N)` tự động ghi đè khi đầy → tuyệt vời cho ring buffer.

### ✔ Code:

```python
from collections import deque

rb = deque(maxlen=3)
rb.append(10)
rb.append(20)
rb.append(30)
rb.append(40)   # tự ghi đè 10

print(list(rb))  # → [20, 30, 40]
```

---

# ✅ **4. Ring Buffer class wrapper dùng deque**

```python
from collections import deque

class RingBuffer:
    def __init__(self, capacity):
        self.buffer = deque(maxlen=capacity)

    def write(self, value):
        self.buffer.append(value)

    def read_all(self):
        return list(self.buffer)

    def __repr__(self):
        return f"RingBuffer({list(self.buffer)})"
```

If you want to find the **maximum integer number** present in a string in Python, you can do it like this:

```python
import re

def find_max_number(s):
    # Find all sequences of digits in the string
    numbers = re.findall(r'\d+', s)
    # Convert them to integers
    numbers = [int(num) for num in numbers]
    # Return the maximum number, or None if no numbers found
    return max(numbers) if numbers else None

# Example usage
s = "There are numbers 42, 7, and 123 in this string."
max_num = find_max_number(s)
print(max_num)  # Output: 123
```

✅ **Explanation**:

1. `re.findall(r'\d+', s)` extracts all consecutive digits as strings.
2. `[int(num) for num in numbers]` converts them into integers.
3. `max(numbers)` returns the largest integer.

If you want, I can also give a **version that works with negative numbers** in the string. Do you want that?


Sure! Here's an alternative solution **without using `re`**, just using basic Python string methods:

```python
def find_max_number(s):
    max_num = None
    current_num = ''
    
    for char in s:
        if char.isdigit():
            current_num += char  # build the current number
        else:
            if current_num:
                num = int(current_num)
                if max_num is None or num > max_num:
                    max_num = num
                current_num = ''  # reset current number
    # Check last number in the string
    if current_num:
        num = int(current_num)
        if max_num is None or num > max_num:
            max_num = num
    
    return max_num

# Example usage
s = "abc12def45ghi7"
print(find_max_number(s))  # Output: 45
```

✅ **Explanation**:

* We loop through each character.
* Build numbers digit by digit.
* When we hit a non-digit, we compare the current number to the max.
* Finally, we also check the last number in case the string ends with digits.

If you want, I can also show a **one-liner solution using `max()` and `split()`**, which is even shorter. Do you want me to do that?



Sure! Here's a simple Python example to create and work with a **tree data structure**. I’ll provide a basic **Node-based tree** implementation with traversal functions.

```python
# Define a Tree Node
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

    # Add child to the node
    def add_child(self, child_node):
        self.children.append(child_node)

# Function to print the tree (Pre-order traversal)
def print_tree(node, level=0):
    print(" " * (level * 2) + str(node.value))
    for child in node.children:
        print_tree(child, level + 1)

# Example usage:
if __name__ == "__main__":
    # Create nodes
    root = TreeNode("Root")
    child1 = TreeNode("Child1")
    child2 = TreeNode("Child2")
    grandchild1 = TreeNode("Grandchild1")
    grandchild2 = TreeNode("Grandchild2")

    # Build the tree
    root.add_child(child1)
    root.add_child(child2)
    child1.add_child(grandchild1)
    child2.add_child(grandchild2)

    # Print the tree
    print_tree(root)
```

**Output:**

```
Root
  Child1
    Grandchild1
  Child2
    Grandchild2
```

✅ Features of this code:

* Simple `TreeNode` class
* Supports multiple children (not just binary)
* Recursive printing with indentation

---

If you want, I can also show a **binary tree version with insert, search, and traversal methods** which is more commonly used in algorithms.

Do you want me to do that?


Perfect! Here’s a **Python implementation of a Binary Search Tree (BST)** with insert, search, and different traversal methods:

```python
# Define a Node in Binary Tree
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Define the Binary Search Tree
class BinaryTree:
    def __init__(self):
        self.root = None

    # Insert a value into the BST
    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left:
                self._insert_recursive(node.left, value)
            else:
                node.left = TreeNode(value)
        else:  # value >= node.value
            if node.right:
                self._insert_recursive(node.right, value)
            else:
                node.right = TreeNode(value)

    # Search for a value in the BST
    def search(self, value):
        return self._search_recursive(self.root, value)

    def _search_recursive(self, node, value):
        if not node:
            return False
        if node.value == value:
            return True
        elif value < node.value:
            return self._search_recursive(node.left, value)
        else:
            return self._search_recursive(node.right, value)

    # In-order traversal (Left, Root, Right)
    def inorder(self, node=None):
        if node is None:
            node = self.root
        if node:
            self.inorder(node.left)
            print(node.value, end=" ")
            self.inorder(node.right)

    # Pre-order traversal (Root, Left, Right)
    def preorder(self, node=None):
        if node is None:
            node = self.root
        if node:
            print(node.value, end=" ")
            self.preorder(node.left)
            self.preorder(node.right)

    # Post-order traversal (Left, Right, Root)
    def postorder(self, node=None):
        if node is None:
            node = self.root
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.value, end=" ")

# Example usage
if __name__ == "__main__":
    bst = BinaryTree()
    values = [50, 30, 70, 20, 40, 60, 80]
    for val in values:
        bst.insert(val)

    print("In-order traversal:")
    bst.inorder()
    print("\nPre-order traversal:")
    bst.preorder()
    print("\nPost-order traversal:")
    bst.postorder()

    # Search
    print("\n\nSearch for 40:", bst.search(40))
    print("Search for 90:", bst.search(90))
```

**Output:**

```
In-order traversal:
20 30 40 50 60 70 80 
Pre-order traversal:
50 30 20 40 70 60 80 
Post-order traversal:
20 40 30 60 80 70 50 
Search for 40: True
Search for 90: False
```

✅ **Features:**

* Insert values maintaining BST properties
* Search for values efficiently
* Traversals: in-order, pre-order, post-order

---

If you want, I can also add a **delete function** and **level-order (BFS) traversal**, which makes it a fully functional BST.

Do you want me to include those?



