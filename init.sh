#!/bin/bash

# Loop through all directories in the current directory
for dir in */; do
  # Extract the directory name
  dirname="${dir%/}"

  # Skip the 'common' directory
  if [ "$dirname" != "common" ]; then
    echo "Processing directory: $dirname"

    # Change into the directory
    cd "$dirname" || {
      echo "Error: Could not change directory to $dirname"
      continue # Skip to the next directory
    }

    # Run mkc init
    echo "Running mkc init..."
    mkc init

    # Delete .github folder (if it exists)
    if [ -d ".github" ]; then
      echo "Deleting .github folder..."
      rm -rf ".github"
    else
      echo ".github folder not found."
    fi

    # Delete .prettierrc file (if it exists)
    if [ -f ".prettierrc" ]; then
      echo "Deleting .prettierrc file..."
      rm ".prettierrc"
    else
      echo ".prettierrc file not found."
    fi

    # Delete mkc.json file (if it exists)
    if [ -f "mkc.json" ]; then
      echo "Deleting mkc.json file..."
      rm "mkc.json"
    else
      echo "mkc.json file not found."
    fi

    # Go back to the parent directory
    cd ..
  fi
done

echo "Script finished."