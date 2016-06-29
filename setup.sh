#!/bin/sh

# ==========================================================================
# Setup script for installing project dependencies.
# NOTE: Run this script while in the project root directory.
#       It will not run correctly when run from another directory.
# ==========================================================================

# Set script to exit on any errors.
set -e

source env-var-setup.sh
source activate-virtualenv.sh
source frontend.sh $1
source backend.sh $1
