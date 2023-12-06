// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DemoContract is ERC20, Ownable {
    constructor() ERC20("DemoContract", "DEMO") Ownable(tx.origin) {
        _mint(msg.sender, 2000 * 10 ** decimals());
    }

    enum MyEnum {
        VALUE1,
        VALUE2,
        VALUE3
    }

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount * (10 ** decimals()));
    }

    function processTypes(
        bool _bool,
        int256 _int,
        string memory _string,
        int _intParam,
        int8 _int8Param
    ) public {
        // Function body empty for demo purposes
    }

    function processAddresses(
        address _address,
        address[] memory _addressArray
    ) public {
        // Function body empty for demo purposes
    }

    function processBytes(
        bytes memory _bytes,
        bytes[] memory _bytesArray,
        bytes32 _bytes32
    ) public {
        // Function body empty for demo purposes
    }

    function processUint(uint256 _uint, uint8 _uint8Param) public {
        // Function body empty for demo purposes
    }

    function processEnums(MyEnum _enumParam) public {
        // Function body empty for demo purposes
    }

    function processArrayTypesOne(
        bool[] memory _boolArray,
        uint256[] memory _uintArray,
        int256[] memory _intArray
    ) public {
        // Function body empty for demo purposes
    }

    function processArrayTypesTwo(
        string[] memory _stringArray,
        int[] memory _intParam,
        int8[] memory _int8Param,
        uint8[] memory _uint8Param
    ) external {
        // Function body empty for demo purposes
    }
}
