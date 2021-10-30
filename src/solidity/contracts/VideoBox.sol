// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract VideoBox {
  string public name;
   
  constructor() {
  }
 
  function getName() public view returns (string memory) {
    return (name);
  }
 
  function changeName(string memory _name) public {
    name = _name;
  }
}
