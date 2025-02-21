const mongoose = require('mongoose');

// Ensure environment variable is set
const mongo_uri = process.env.MONGO_URI;

if (!mongo_uri) {
  console.error("Error: MONGO_URI is not defined in .env file");
  process.exit(1); // Exit the process if no MongoDB URI is provided
}

mongoose.connect(mongo_uri, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

module.exports = mongoose;
