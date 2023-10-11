import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
     publicRoutes: ["/", "/(api|trpc)(.*)"]
}); 

// run check 
console.log("**MIDDLEWARE RUNNING**"); 
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};