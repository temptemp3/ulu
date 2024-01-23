const swap200Schema = {
  "name": "SWAP-200",
  "desc": "ARC200 Based AMM Interface",
  "methods": [
    {
      "name": "Info",
      "args": [],
      "returns": {
        "type": "((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)"
      },
      "readonly": true
    },
    { "name": "Protocol_delete", "args": [], "returns": { "type": "void" } },
    {
      "name": "Protocol_harvest",
      "args": [
        { "type": "address" },
        { "type": "(uint256,uint256,uint256,address,byte)" }
      ],
      "returns": { "type": "((uint256,uint256),uint64)" }
    },
    {
      "name": "Provider_deposit",
      "args": [
        { "type": "(uint256,uint256)" },
        { "type": "uint256" }
      ],
      "returns": { "type": "uint256" }
    },
    {
      "name": "Provider_depositA",
      "args": [{ "type": "uint256" }],
      "returns": { "type": "uint256" }
    },
    {
      "name": "Provider_depositB",
      "args": [{ "type": "uint256" }],
      "returns": { "type": "uint256" }
    },
    {
      "name": "Provider_withdraw",
      "args": [{ "type": "uint256" }, { "type": "(uint256,uint256)" }],
      "returns": { "type": "(uint256,uint256)" }
    },
    {
      "name": "Provider_withdrawA",
      "args": [{ "type": "uint256" }],
      "returns": { "type": "uint256" }
    },
    {
      "name": "Provider_withdrawB",
      "args": [{ "type": "uint256" }],
      "returns": { "type": "uint256" }
    },
    {
      "name": "Trader_exactSwapAForB",
      "args": [{ "type": "uint256" }, { "type": "uint256" }],
      "returns": { "type": "(uint256,uint256)" }
    },
    {
      "name": "Trader_exactSwapBForA",
      "args": [{ "type": "uint256" }, { "type": "uint256" }],
      "returns": { "type": "(uint256,uint256)" }
    },
    {
      "name": "Trader_swapAForB",
      "args": [{ "type": "uint256" }, { "type": "uint256" }],
      "returns": { "type": "(uint256,uint256)" }
    },
    {
      "name": "Trader_swapBForA",
      "args": [{ "type": "uint256" }, { "type": "uint256" }],
      "returns": { "type": "(uint256,uint256)" }
    },
    {
      "name": "_reachp_0",
      "args": [
        { "type": "uint64" },
        { "type": "((uint64,byte[32],byte[8]),uint64,uint64,uint64,address)" }
      ],
      "returns": { "type": "void" }
    },
    {
      "name": "_reachp_2",
      "args": [{ "type": "uint64" }],
      "returns": { "type": "void" }
    },
    {
      "name": "_reachp_3",
      "args": [{ "type": "uint64" }, { "type": "(byte,byte[161])" }],
      "returns": { "type": "void" }
    },
    {
      "name": "reserve",
      "args": [{ "type": "address" }],
      "returns": { "type": "(uint256,uint256)" },
      "readonly": true
    }
  ],
  "events": [
    { "name": "Event", "args": [{ "type": "(byte,byte[256])" }] },
    {
      "name": "WithdrawEvent",
      "args": [{ "type": "(address,(uint256,uint256))" }]
    },
    {
      "name": "arc200_Approval",
      "args": [
        { "type": "address" },
        { "type": "address" },
        { "type": "uint256" }
      ]
    },
    {
      "name": "arc200_Transfer",
      "args": [
        { "type": "address" },
        { "type": "address" },
        { "type": "uint256" }
      ]
    }
  ]
}
export default swap200Schema;