#!/bin/bash

# deployment/vercel-deploy.sh
# Script to deploy frontend to Vercel

set -e

echo "🚀 Deploying to Vercel..."

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: VERCEL_TOKEN environment variable is not set"
    exit 1
fi

npm install -g vercel

cd client

# Deploy to production
vercel --token "$VERCEL_TOKEN" --prod

echo "✅ Frontend deployed successfully to Vercel"
echo "View your deployment: https://vercel.com/dashboard"
