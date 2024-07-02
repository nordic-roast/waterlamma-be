const express = require('express');
const bodyParser = require('body-parser');
const { User, HydrationEntry } = require('./db/models'); // Adjust the path according to your project structure

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Endpoint to get hydration entries for a logged-in user
app.get('/hydration-entries', async (req, res) => {
    const userId = 1; 
    try {
        const entries = await HydrationEntry.findAll({
            where: {
                userID: userId
            },
            include: [{
                model: User,
                attributes: ['name', 'email'] // Optional: Include related user data
            }]
        });

        res.json(entries);
    } catch (error) {
        console.error('Error fetching hydration entries:', error);
        res.status(500).send('Error fetching hydration entries');
    }
});

app.use(bodyParser.json()); // To parse JSON bodies

// Endpoint to handle Clerk webhooks
app.post('/users', async (req, res) => {
    try {
        const { data } = req.body; // Extracting the 'data' object from the payload
        const emailInfo = data.email_addresses[0]; // Assuming the primary email is the first one

        // Extract required fields
        const auth0_id = data.external_accounts[0]?.id; // Assuming the first external account is relevant
        const name = `${data.first_name} ${data.last_name}`;
        const email = emailInfo.email_address;

        // Example of inserting into your database
        const newUser = await User.create({
            auth0_id: auth0_id,
            name: name,
            email: email,
            weight: null // Placeholder if weight is not provided
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error processing user data:', error);
        res.status(500).json({ message: 'Failed to process user data' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});