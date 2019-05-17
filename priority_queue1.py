class priority_queue:
    def __init__(self):
        self.queue=[]
        self.length=0
    def insert(self,distance,vertex):
        self.queue.append((distance,vertex))
        self.length+=1
        if self.length>1:
            for i in range(self.length//2,-1,-1):
                self.heapify(i)
            self.queue=sorted(self.queue,key=lambda x: x[0])
            
        
    def remove(self):
        if self.length >0:
            self.length-=1
            return_val=self.queue[0]
            self.queue=self.queue[1:]
        else :
            return_val=-1
        return return_val
    def heapify(self,index):
        # print(self.queue)
        # print("index : ",index," last ind : ",self.length-1)

        if 2*index >self.length-1:
            # print(self.queue)
            return
        j=2*index
        if j+1 < self.length:
            if self.queue[j+1][0]<self.queue[j][0]:
                j+=1
        # print("index : ",index," j : ",j ," length : ",self.length)

        if self.queue[j][0]<self.queue[index][0]:
            temp=self.queue[j]
            self.queue[j]=self.queue[index]
            self.queue[index]=temp
            self.heapify(j)


