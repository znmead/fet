import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware()
//logging to see if it works
console.log(authMiddleware(),"**MIDDLEWARE RUNNING**"); 
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
