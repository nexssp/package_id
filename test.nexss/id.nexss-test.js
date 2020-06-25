module.exports = {
  tests: [
    {
      title: "Test Id",
      tests: [
        {
          title: "Test of without parameters",
          params: ["nexss Id", /"nxsOut":".*"/],
        },
        {
          title: "nxsAs test",
          // shows nexss version like: 2.0.9
          params: ["nexss Id --nxsAs=myfield", /"myfield":".*"/],
        },
      ],
    },
  ],
};
