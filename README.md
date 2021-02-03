# lucaspickering.me

Static site written in TypeScript+React. Hosted at [lucaspickering.me](https://lucaspickering.me).

## Why React?

An obvious question is, if this site is just static content, why use React? The answer is that I want the option to make cool interactive posts. Most of the posts are just rendered Markdown, but some of them will include interactive elements that are much easier to write in TypeScript+React than in HTML+JS.

## Development

### Running Locally

- Clone the repo
- `npm install`
- `npm run start`
- Edit stuff

## Deployment

Deployed through [Keskne](https://github.com/LucasPickering/keskne). Every push to master automatically rebuilds the docker image that Keskne uses.
