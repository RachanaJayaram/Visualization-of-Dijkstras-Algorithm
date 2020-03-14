class priority_queue:
    def __init__(self):
        self.queue = []
        self.length = 0

    def insert(self, distance, vertex):
        self.queue.append((distance, vertex))
        self.length += 1
        i = self.length-1
        print(self.queue[(i-1)//2][0], self.queue[i][0])
        while i != 0 and self.queue[(i-1)//2][0] > self.queue[i][0]:
            temp = self.queue[i]
            self.queue[i] = self.queue[(i-1)//2]
            self.queue[(i-1)//2] = temp
            i = (i-1)//2
        print(self.queue)

    def remove(self):
        if self.length > 0:
            self.length -= 1
            return_val = self.queue[0]
            self.queue[0] = self.queue[self.length]
            self.queue = self.queue[0:self.length]
            self.heapify(0)
        else:
            return_val = -1
        return return_val

    def heapify(self, index):
        if 2*index+1 >= self.length:
            return

        j = 2*index + 1
        if j+1 < self.length:
            if self.queue[j+1][0] < self.queue[j][0]:
                j += 1

        if self.queue[j][0] < self.queue[index][0]:
            temp = self.queue[j]
            self.queue[j] = self.queue[index]
            self.queue[index] = temp
            self.heapify(j)

    def sort(self):
        '''For visualization only'''
        return sorted(self.queue)
