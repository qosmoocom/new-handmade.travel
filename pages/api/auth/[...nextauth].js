import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "193172791060-8f7tmd8pd7ge7f4smmufkkuvk16etngh.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "394044082772055",
      clientSecret: "86254f7fedfccc4e8c0a9fe9924c6d3d",
    }),
    // ...add more providers here
  ],
});
