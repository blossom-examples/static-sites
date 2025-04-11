# Pelican Example Site

A ready-to-deploy Pelican static site example for [Blossom](https://www.blossom-cloud.com).

## Setup

1. Install dependencies:

    python -m pip install "pelican[markdown]"

2. Run development server:

    pelican --listen

Your site is available at http://localhost:8000

## Building

To build the static site:

    pelican content

The site will be generated in the `output` directory.