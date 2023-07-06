import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {  
  
  try {
    const apiKey = process.env["NG_APP_SPOONACULAR_API_KEY"];

    return{
        statusCode:200,
        body:JSON.stringify({ message: `${apiKey}`})
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
