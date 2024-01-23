const arc72Schema = {
  name: "ARC-72",
  description: "Smart Contract NFT Interface",
  methods: [
    {
      name: "arc72_balanceOf",
      args: [{ type: "address" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_getApproved",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_isApprovedForAll",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "bool" },
      readonly: true,
    },
    {
      name: "arc72_ownerOf",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_tokenByIndex",
      args: [{ type: "uint256" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_totalSupply",
      args: [],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_tokenURI",
      args: [{ type: "uint256" }],
      returns: { type: "byte[256]" },
      readonly: true,
    },
    {
      name: "supportsInterface",
      args: [{ type: "byte[4]" }],
      returns: { type: "bool" },
      readonly: true,
    },
    {
      name: "arc72_approve",
      args: [{ type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_setApprovalForAll",
      args: [{ type: "address" }, { type: "bool" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_transferFrom",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
  ],
  events: [
    {
      name: "arc72_Approval",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
    {
      name: "arc72_ApprovalForAll",
      args: [{ type: "address" }, { type: "address" }, { type: "bool" }],
    },
    {
      name: "arc72_Transfer",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
  ],
};
export default arc72Schema;