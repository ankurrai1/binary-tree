const assert = require('assert');
const BinaryTree = require('./treeImplimentsation.js');

let test = {};

exports.test = test;

test["BinaryTree.insertValue should arrange given number in BinaryTree structure"]=function () {
  let binaryTree=new BinaryTree(4);
  binaryTree.insertValue(5);
  binaryTree.insertValue(6);
  binaryTree.insertValue(3);
  let expected={ value: 4,left: { value: 3, left: null, right: null },
                          right: { value: 5,left:null,
                                            right: { value: 6, left: null, right: null }
                                  }
                 };
  assert.deepEqual(binaryTree,expected);
};

test["BinaryTree.isChildOfBinaryTree should give true if given number is a child of BinaryTree"]=function () {
  let binaryTree=new BinaryTree(4);
  binaryTree.insertValue(5);
  binaryTree.insertValue(6);
  binaryTree.insertValue(3);
  assert.ok(binaryTree.isChildOfBinaryTree(6));
  assert.ok(binaryTree.isChildOfBinaryTree(3));
  assert.ok(binaryTree.isChildOfBinaryTree(5));
};

test["BinaryTree.isChildOfBinaryTree should give false if given number is not child of BinaryTree"]=function () {
  let binaryTree=new BinaryTree(4);
  binaryTree.insertValue(5);
  binaryTree.insertValue(6);
  binaryTree.insertValue(3);
  assert.ok(!binaryTree.isChildOfBinaryTree());
  assert.ok(!binaryTree.isChildOfBinaryTree(0));
  assert.ok(!binaryTree.isChildOfBinaryTree(7));
};

test["BinaryTree.getLeastValue should give least number in in BinaryTree"]=function () {

    let binaryTree=new BinaryTree(4);
    binaryTree.insertValue(5);
    binaryTree.insertValue(6);
    binaryTree.insertValue(2);
    binaryTree.insertValue(3);
    binaryTree.insertValue(1);
    assert.equal(binaryTree.getLeastValue(),1)
};

test["BinaryTree.getGretestValue should give least number in in BinaryTree"]=function () {
  let binaryTree=new BinaryTree(4);
  binaryTree.insertValue(5);
  binaryTree.insertValue(9);
  binaryTree.insertValue(2);
  binaryTree.insertValue(3);
  binaryTree.insertValue(1);
  assert.equal(binaryTree.getGretestValue(),9)
};

test["BinaryTree.insertLeftBranch should give a new branch of BinaryTree for given input number "]=function () {
  let binaryTree=new BinaryTree(4);
  let expected={ value: 3, left: null, right: null };
  let actual=binaryTree.insertLeftBranch(3);
  assert.deepEqual(actual,expected);
};

test["BinaryTree.insertRightBranch should give a new branch of BinaryTree for given input number"]=function () {
  let binaryTree=new BinaryTree(5);
  let expected={ value: 9, left: null, right: null };
  let actual=binaryTree.insertRightBranch(9);
  assert.deepEqual(actual,expected);
};
