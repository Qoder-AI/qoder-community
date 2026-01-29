---
name: building-secure-contracts
title: Building Secure Smart Contracts
description: Build secure smart contracts avoiding common security vulnerabilities and pitfalls
source: community
author: trailofbits
githubUrl: https://github.com/trailofbits/skills/tree/main/building-secure-contracts
category: security
tags:
  - blockchain
  - solidity
  - smart-contracts
  - web3
roles:
  - developer
featured: false
popular: false
isOfficial: false
installCommand: |
  git clone https://github.com/trailofbits/skills
  cp -r skills/building-secure-contracts ~/.qoder/skills/
date: 2026-01-15
---

## Use Cases

- Solidity contract development
- Smart contract security audit
- DeFi protocol development
- NFT contract design
- Contract upgrade strategies

## Core Capabilities

- **Vulnerability Identification**: Reentrancy attacks, overflow, etc.
- **Best Practices**: OpenZeppelin standards
- **Gas Optimization**: Reduce transaction costs
- **Test Coverage**: Complete testing strategies

## Example

```solidity
// Please review this contract for security:
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    balances[msg.sender] -= amount;
}

// Please identify security issues and provide fixes
```

## Notes

- Smart contracts are hard to modify after deployment
- Test thoroughly before deploying
- Consider using proxy pattern
- Get professional security audits
