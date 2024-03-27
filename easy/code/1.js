/**
 * 请你仅使用两个栈实现先入先出队列。
 * 队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
 */


/**
 * 先进后出  栈底 [1, 2, 3] 栈顶
 */
class Stack {
    state = []
    // 入栈
    push(data) {
        return this.state.push(data)
    }
    // 出栈: 弹出栈顶元素
    pop() {
        return this.state.pop()
    }

    // 访问栈顶元素
    peek() {
        return this.state[this.state.length - 1]
    }

    empty() {
        return this.state.length === 0
    }


}

// 先进先出
class Queue {

    inStack = new Stack()
    outStack = new Stack()

    push(data) {
        this.inStack.push(data)
    }

    peek() {
        if(this.outStack.empty()) {
            while(!this.inStack.empty()) {
                this.outStack.push(this.inStack.pop())
            }
        }
        return this.outStack.peek()
    }

    pop() {
        this.peek();
        return this.outStack.pop();
    }

    empty() {
        return this.inStack.empty() && this.outStack.empty()
    }
}