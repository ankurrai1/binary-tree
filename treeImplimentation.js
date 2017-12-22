const BinaryTree = function(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}
BinaryTree.prototype = {
  insertValue: function(value) {
    if (value <= this.value) return this.insertLeftBranch(value);
    this.insertRightBranch(value);
  },

  insertLeftBranch: function(value) {
    if (!this.left)return this.left = new BinaryTree(value)
    this.left.insertValue(value);
  },

  insertRightBranch: function(value) {
    if (!this.right) return this.right = new BinaryTree(value);
    this.right.insertValue(value);
  },


  isChildOfBinaryTree: function(value) {
    if (this.value == value) return true;
    if (value < this.value) return this.checkLeftBranch(value);
    return this.checkRightBranch(value);
  },

  checkLeftBranch: function(value) {
    if (!this.left) return false;
    return this.left.isChildOfBinaryTree(value);
  },

  checkRightBranch: function(value) {
    if (!this.right)return false;
    return this.right.isChildOfBinaryTree(value);
  },

  getLeastValue: function() {
    if (!this.left) return this.value;
      return this.left.getLeastValue();
  },

  getGretestValue: function() {
    if (!this.right) return this.value;
      return this.right.getGretestValue();
  }
};
module.exports = BinaryTree;
