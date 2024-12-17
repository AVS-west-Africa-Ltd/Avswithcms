const express = require('express');
const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('YOUR_BASE_ID');

const app = express();
app.use(express.json());

app.post('/api/createRecord', (req, res) => {
  const { firstName, lastName, email, phoneNumber, comment } = req.body;

  base('Website contacts').create(
    [
      {
        fields: {
          'First Name': firstName,
          'Last Name': lastName,
          Email: email,
          'Phone Number': phoneNumber,
          Comments: comment,
        },
      },
    ],
    (err, records) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error creating record' });
      }
      console.log('Created record:', records[0].getId());
      res.status(200).json({ message: 'Record created successfully' });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
