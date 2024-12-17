// import type { NextApiRequest, NextApiResponse } from "next";
// import { SignedPostPolicyV4Output } from "@google-cloud/storage";
// import { Storage } from "@google-cloud/storage";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<SignedPostPolicyV4Output | string>
// ) {
//   const { query, method } = req;
//   if (method !== "POST") {
//     res.status(405).json("Method not allowed");
//     return;
//   }
//   const storage = new Storage({
//     projectId: process.env.PROJECT_ID,
//     credentials: {
//       client_email: process.env.CLIENT_EMAIL,
//       private_key: process.env.PRIVATE_KEY,
//     },
//   });
//   const bucket = storage.bucket(process.env.BUCKET_NAME);
//   const file = bucket.file(query.file as string);
//   const options = {
//     expires: Date.now() + 5 * 60 * 1000, //  5 minutes,
//     fields: { "x-goog-meta-source": "nextjs-project" },
//   };
//   const [response] = await file.generateSignedPostPolicyV4(options);
//   res.status(200).json(response);
// }
import { Storage } from "@google-cloud/storage";

// Using native Request and Response objects from the Web API
export async function POST(req: Request, res: Response) {
  // Check if the request method is POST
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Extract query parameters from the URL
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get("file");

  if (!fileName) {
    return new Response("File query param is missing", { status: 400 });
  }

  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"), // Fix for escaped newlines
    },
  });

  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const file = bucket.file(fileName);

  const options = {
    expires: Date.now() + 5 * 60 * 1000, // 5 minutes
    fields: { "x-goog-meta-source": "nextjs-project" },
  };

  try {
    const [response] = await file.generateSignedPostPolicyV4(options);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error generating signed URL", { status: 500 });
  }
}
