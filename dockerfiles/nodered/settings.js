module.exports = {
    adminAuth: {
      type: "credentials",
      users: [
        {
          username: "admin",
          password: "$2b$08$qZ8kK3iTPOVeJVmt1qoWhORehvmR6W2PzfNnguWWx4pHSh4V1Q/GC",
          permissions: "*",
        },
      ],
    },
    // httpNodeAuth: { user: process.env.NR_USERNAME || "", pass: process.env.NR_PASSWORD || "" },
    // httpAdminRoot: "/admin",
    // httpNodeRoot: "/",
  };