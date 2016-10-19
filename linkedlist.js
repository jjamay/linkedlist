var Node = function(val) {
  this.value = val;
  this.next = null;
}

var linkedList = function() {

  this.head;

  this.insert = function(val) {
    if (!this.head) {
      this.head = new Node(val)
    } else {
      var curNode = this.head;
      while(curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = new Node(val);
    }
  }

  this.print = function() {
    var curNode = this.head;
    console.log(curNode.value);
    while(curNode.next) {
      curNode = curNode.next;
      console.log(curNode.value);
    }
  }

  this.search = function(val) {
    var curNode = this.head;
    while(curNode) {
      if (curNode.value == val) {
        return true;
      } else {
        curNode = curNode.next;
      }
    }
    return false;
  }

  this.deleteLast = function() {
    if (this.head) {
      if (this.head.next) {
        curNode = this.head;
        while(curNode.next.next) {
          curNode = curNode.next;
        }
        curNode.next = null;
      } else {
        this.head = null;
      }
    }
  }

  this.deleteFirst = function() {
    if (this.head) {
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    }
  }
}

// bonus function
var isPalindrome = function(string) {
  var length = string.length;
  var end = length - 1;
  if (string[0] == string[end]) {
    if (end <= 1) {
      return true;
    } else {
      return isPalindrome(string.substring(1, end - 1));
    }
  } else {
    return false;
  }
}

console.log(isPalindrome("Jordan"));
