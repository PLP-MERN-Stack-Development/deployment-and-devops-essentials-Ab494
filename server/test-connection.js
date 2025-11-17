#!/usr/bin/env node

/**
 * MongoDB Connection Test Script
 * Run this locally to test your MongoDB connection before deploying
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://Vanso:Evans6042@cluster0.0isk9oj.mongodb.net/mernapp?retryWrites=true&w=majority';

async function testConnection() {
  console.log('🔄 Testing MongoDB connection...');
  console.log(`URI: ${MONGODB_URI.replace(/\/\/.*@/, '//[HIDDEN]@')}`);
  
  try {
    // Test connection with short timeout
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    
    console.log('✅ MongoDB connected successfully!');
    console.log('Database name:', mongoose.connection.name);
    console.log('Host:', mongoose.connection.host);
    
    // List available collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    return true;
  } catch (error) {
    console.log('❌ MongoDB connection failed:');
    console.log('Error:', error.message);
    
    if (error.message.includes('IP')) {
      console.log('\n🔧 Fix: Add your IP to MongoDB Atlas Network Access');
      console.log('Go to: https://cloud.mongodb.com → Network Access');
    } else if (error.message.includes('authentication')) {
      console.log('\n🔧 Fix: Check username/password in connection string');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n🔧 Fix: Check cluster name in connection string');
    }
    
    return false;
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Connection closed');
  }
}

// Run the test
testConnection().then(success => {
  process.exit(success ? 0 : 1);
});
