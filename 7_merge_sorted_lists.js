// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing 
// together the nodes of the first two lists. Return the head of the merged linked list.

class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    mergeLists(list1, list2) {
        var tempNode = new Node(0);
        var tail = tempNode;
        while(true){
            if(list1 == null){
                tail.next = list2;
                break;
            }
            if(list2 == null){
                tail.next = list1;
                break;
            }

            if(list1.value <= list2.value){
                tail.next = list1;
                list1 = list1.next;
            }else{
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        return tempNode.next;
    }

}

var sll = new SLList();
console.log(sll.mergeLists([1,2,4],[2,3,4]));
