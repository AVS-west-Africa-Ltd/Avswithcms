// api/airtable.js
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      // Configure Airtable with your API key
      var base = new Airtable({ apiKey: 'patXS0PRPjpjUW2mX.8bd65970403b541d96c70030ad25a26d0bd05280b70366fa5b3545f7835464ec' }).base('app1emQeKUnvgZvcB');
      console.log('Raw Request Body:', req.body);

      // Parse the JSON data from the request body
      const jsonData = await req.json()

      // Log the incoming data
      console.log('Incoming Data:', jsonData);

      //  const attachmentBuffer = Buffer.from(jsonData.Attachments, 'base64');
      //  const attachment = {
      //     filename: 'attachment.pdf', //CHANGE FILE NAME TO FILENAME
      //     content: attachmentBuffer,
      // };

      //PROPERTY NAME MUST MATCH AIRTABLE
      const createRecord = await base('tblNIgRmKultRDmEK').create({
        'First Name': jsonData.Name,
        'Last Name': jsonData.LastName,
        Email: jsonData.Email,
        Phone: jsonData.Phone,
        'Looking For': jsonData.LookingFor,
        Comments: jsonData.Comments,
        // Attachments: [attachment],
      });
      


      console.log('Created record:', createRecord.getId());
      console.log('Created record response:', createRecord);
      return NextResponse.json({ message: 'Record created successfully' });
    } catch (error) {
      console.error('Error:', error.message);

      if (error.statusCode === 422) {
        // Handle validation errors (for example, invalid email)
        return NextResponse.json({ error: 'Validation Error', details: error.message }, { status: 422 });
      } else {
        // Handle other errors
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
      }
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
