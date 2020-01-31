pragma solidity ^0.5.14;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Token is ERC20, ERC20Detailed, ERC20Mintable, ERC20Burnable {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals
    )
        public
        ERC20Detailed(name, symbol, decimals)
    {
        _mint(msg.sender, 1000000 ether);
    }
}
