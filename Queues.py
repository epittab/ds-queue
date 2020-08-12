
class Queue:
    def __init__(self):
        self.data = []
    
    def size(self):
        return len(self.data)
        #todo
    
    def enqueue(self, x):
        self.data.append(x)
        #todo

    def dequeue(self):
        print('dequeue')
        #todo

    def first(self):
        if (self.empty()):
            return False
        return self.data[0]

    def empty(self):
        if (len(self.data) == 0):
            return True
        else:
            return False
        #todo


test = Queue()


print(f'The size of this Queue is {test.size()}')
print(test.empty())
print(test.first())