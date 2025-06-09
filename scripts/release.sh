#!/bin/bash

# Check if commit message was provided
if [ $# -eq 0 ]; then
    echo "Error: Commit message is required"
    echo "Usage: $0 \"commit message\""
    exit 1
fi

COMMIT_MESSAGE="$1"

echo "Building..."
pnpm build;

echo "Checking if package.json version changed..."
CURRENT_VERSION=$(jq -r '.version' package.json)
PREVIOUS_VERSION=$(git show HEAD:package.json | jq -r '.version')

if [ "$CURRENT_VERSION" == "$PREVIOUS_VERSION" ]; then
  echo "Package.json version is not changed. Current: $CURRENT_VERSION, Previous: $PREVIOUS_VERSION"
  exit 1
fi

echo "Package.json version is changed from $PREVIOUS_VERSION to $CURRENT_VERSION. Committing..."

git add .
git commit -m "$COMMIT_MESSAGE"
git push

echo "Committed and pushed!"

echo "Tagging..."
git tag v$CURRENT_VERSION
git push origin v$CURRENT_VERSION

echo "Tagged and pushed!"

echo "Creating release..."
gh release create v$CURRENT_VERSION --generate-notes

echo "Release v$CURRENT_VERSION created!" 
