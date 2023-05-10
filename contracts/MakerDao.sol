// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface SaiProxyCreateAndExecute {

    // Create a DSProxy instance and open a cup
    function createAndOpen(address registry_, address tub_) external returns (address proxy, bytes32 cup);
    // Create a DSProxy instance, open a cup, and lock collateral
    function createOpenAndLock(address registry_, address tub_) external payable returns (address proxy, bytes32 cup);

    // Create a DSProxy instance, open a cup, lock collateral, and draw DAI
    function createOpenLockAndDraw(address registry_, address tub_, uint wad) external payable returns (address proxy, bytes32 cup);
}
