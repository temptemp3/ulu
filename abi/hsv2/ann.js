const annSchema = {
  name: "HumbleSwap v2 farm announcer",
  desc: "Announces new farms",
  methods: [],
  events: [
    {
      name: "Announce",
      args: [
        { type: "address" },
        {
          type: "(uint64,uint64,uint64,uint64,(uint64,uint64),uint64,(byte,byte[8]),byte[8],uint64,byte[8],uint64,byte[8],uint64,uint64,byte[8],uint64)",
        },
        { type: "byte[0]" },
      ],
    },
  ],
};
export default annSchema;
