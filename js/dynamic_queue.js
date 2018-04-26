class DynamicQueue{
    constructor(){
        this.length = 0;
        this.front = null;
        this.back = null;
    }
    enqueue(element) {
    	let node = new Node(element);
    	if (this.back == null && this.front == null){
    		this.back = node;
    		this.front = node;
    	}
    	else {
    		node.next = this.back;
    		this.back = node;
    	}
    	this.length++;
    	console.log(this.back);
    }
    
    
    dequeue(){
    	if (this.front == null){
    		console.log('null');
    		return null;
    	}
    	if (this.length == 1){
    		let current = this.front;
			this.clear();
			this.length--;
			return current.element;
			
    	}
		else {
			let current = this.back;
			let prev = null;
			
			while (current.next){
				prev = current;
				current = current.next;
			}
			
			if (prev){
				prev.next = null;
			}
			
			this.front = prev;
			this.length--;
			
			return current.element;
		}    	
		
    }
    
    front() {
    	return this.front;
    }
    
    
    back(){
    	return this.back;
    }
    
    
    isEmpty() {
    	return this.back == null;
    }
    
    size() {
    	return this.length; 
    }
    
    clear() {
    	this.front = null;
    	this.back = null;
    }
    
    print(separator=" - ") {
    	let current = this.back;
    	let string = '';
    	if (current != null){
    		string += current.element;
    		console.log(string);
    		while(current.next){
	    		current = current.next;
	    		string += separator + current.element;
    		}
    	}
    	return string;
    	
    }
}
