import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = 'mongodb://localhost:27017/glassesStore?authSource=admin',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;