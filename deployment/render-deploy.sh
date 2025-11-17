#!/bin/bash

# deployment/render-deploy.sh
# Script to deploy backend to Render

set -e

echo "🚀 Deploying to Render..."

if [ -z "$RENDER_DEPLOY_HOOK" ]; then
    echo "❌ Error: RENDER_DEPLOY_HOOK environment variable is not set"
    exit 1
fi

# Trigger deployment
curl --no-buffer --remote-name -H "Content-Type: application/json" \
  -d '{}' "$RENDER_DEPLOY_HOOK"

echo "✅ Deployment hook triggered"
echo "Monitor your deployment at: https://dashboard.render.com"
