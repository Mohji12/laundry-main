# Orchid Dry Cleaners & Launderette

Premium dry cleaning and laundry pickup & delivery site for Orchid Dry Cleaners & Launderette in Ladbroke Grove, North Kensington (London W10).

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
npm i
npm run dev
```

Other scripts:

```sh
npm run build
npm run preview
npm run lint
npm run format
```

Business details (WhatsApp number, services, pricing, areas) live in `src/lib/orchids.ts`.

## Deploy on AWS Amplify

This app builds with Nitro’s `aws_amplify` preset into `.amplify-hosting` (see `amplify.yml`).

1. Push this repo to GitHub / GitLab / Bitbucket / CodeCommit.
2. Open the [Amplify Console](https://console.aws.amazon.com/amplify/) → **Create new app** → **Host web app**.
3. Connect the repository and branch.
4. Confirm Amplify detects `amplify.yml` (build output: `.amplify-hosting`).
5. Optionally enable **SSR logging** (CloudWatch), then deploy.

Local production build check:

```sh
npm run build
```

You should see a `.amplify-hosting` folder with `compute/` and `static/` (or similar) after a successful build.
