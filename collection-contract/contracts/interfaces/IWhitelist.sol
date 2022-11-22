// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IWhitelist {
    function whitelistedAddress(address) external view returns (bool);
}
