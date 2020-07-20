# lucaspickering.me

Simple static site. Hosted at [lucaspickering.me](https://lucaspickering.me).

## Development

### Running Locally

- Clone the repo
- Host the page with something like [http.server](https://docs.python.org/3/library/http.server.html) (built in to Python 3)
  - `python3 -m http.server --directory public/`
- Edit stuff

## Deployment

Deployed through [Keskne](https://github.com/LucasPickering/keskne). New changes on master are automatically built and pushed to the container registry.
