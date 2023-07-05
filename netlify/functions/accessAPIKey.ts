import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  
  try {
    return{
        statusCode:200,
        body:JSON.stringify(process.env["SPOONACULAR_API_KEY"])
    }
    
  } catch (error) {
    console.log(error);
    
    return {
        statusCode: 404,
        body: error?.toString()
      };
  }
};

export { handler };
