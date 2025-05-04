// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract MyContractV1 {
    uint256 public number;

    function initialValue(uint256 _number) external {
        number = _number;
    }

    function increase() external {
        number += 1;
    }

    function getNumber() external view returns (uint256) {
        return number;
    }
}
