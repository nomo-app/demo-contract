pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PriceOracle is Ownable {
    mapping(string => uint256) private prices;
    event PriceUpdated(string symbol, uint256 newPrice);

    function updatePrice(string memory symbol, uint256 price) public onlyOwner {
        prices[symbol] = price;
        emit PriceUpdated(symbol, price);
    }

    function getPrice(string memory symbol) public view returns (uint256) {
        return prices[symbol];
    }
}
