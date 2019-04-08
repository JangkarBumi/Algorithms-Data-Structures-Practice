#solution
class Node
    attr_accessor :value, :next_node
    
    def initialize(value, next_node = nil)
        @value = value
      @next_node = next_node
    end
  end
  
  class LinkedList
    #setup head and tail
  
    def add(number)
      # your code here
      new_node = Node.new(number)
      
        if @head.nil?
            @head = new_node
            @tail = new_node
        else
            @tail.next_node = new_node
            @tail = new_node
        end
    end
  
    def get(index)
      #your code here
      node = @head
        
        while index > 0 && node
          node = node.next_node
          index -= 1
        end
        
        node.value
    end
  end
  
  list = LinkedList.new
  list.add(3)
  list.add(5)
  puts list.get(1)

#boilerplate    
class Node
    attr_accessor :value, :next_node
    
    def initialize(value, next_node = nil)
        @value = value
      @next_node = next_node
    end
  end
  
  class LinkedList
    #setup head and tail
  
    def add(number)
      # your code here
    end
  
    def get(index)
      # your code here
    end
  end
  
  list = LinkedList.new
  
  list.add(3)
  list.add(5)
  puts list.get(1)
  



#1. Create node class
#2. Create linkedlist class
#3. initialize head & tail as nil
#4. 


=begin 

Lists  

Create your own LinkedList  class for storing integers which should include two methods:  
add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. 
get(index) - Return the value of the Node at position `index` in the List.   

Example  

This is an example of a test case:  
list = LinkedList.new
list.add(3)
list.add(5)
puts list.get(1)
# => 5


The 2 add operations create the list: [3, 5]. 
The get operation, gets the number located at position 1. 
    
=end
=begin
Materials

https://www.coursera.org/lecture/data-structures/arrays-OsBSF
https://www.geeksforgeeks.org/data-structures/linked-list/#singlyLinkedList

Linked List Advantages over arrays
1) Dynamic size
2) Ease of insertion/deletion

Linked List Drawbacks:
1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it here.
2) Extra memory space for a pointer is required with each element of the list.
3) Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.
=end