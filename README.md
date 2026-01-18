<br/>
<p align="center">
  <a href="https://github.com/HuskyNZ/11">
    <img src="https://serv.hnz.li/logo/default.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HuskyNZ's Main Site</h3>
  <br>

</p>

![Contributors](https://img.shields.io/github/contributors/HuskyNZ/11?color=dark-green) ![Issues](https://img.shields.io/github/issues/HuskyNZ/11) ![License](https://img.shields.io/github/license/HuskyNZ/11)

## About The Project

This site is built in NextJS and is the new main site for HuskyNZ where I can share what I know and about who I am


## Built With

- [Nextjs](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Cloudlfare](https://www.cloudflare.com/)
- [Github](https://github.com/)
- [Dokploy](https://dokploy.com/)
## Roadmap

Im working on getting content into the blog and projects

## Docker Publish (GHCR)

- **Workflow**: A GitHub Actions workflow at [.github/workflows/docker-publish.yml](.github/workflows/docker-publish.yml) builds the Docker image from [Dockerfile](Dockerfile) and publishes it to GitHub Container Registry.
- **Registry**: Images are pushed to `ghcr.io/<owner>/<repo>` (derived from the repository).
- **Triggers**: Runs on pushes to `master`/`dev`, PRs (build-only), and tags matching `v*` or `cr*`.
- **Permissions**: The workflow uses `GITHUB_TOKEN`; ensure job permissions include `packages: write` (already set in the workflow). No extra secrets are needed.
- **First Run**: After merging to default branch (`master`), check the package under GitHub → Packages. Adjust visibility (public/private) as desired.

### Manually pulling the image

```bash
docker pull ghcr.io/<owner>/<repo>:latest
docker run -p 3000:3000 ghcr.io/<owner>/<repo>:latest
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/huskynz/11/issues/new) to discuss it, or directly create a pull request after you edit a file with necessary changes. I only accept incoming pull requests on the dev branch for my sanity
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/huskynz/11/blob/master/LICENSE) for more information.

## Authors

- [HuskyNZ](https://www.husky.nz)

## Acknowledgements

- [Cloudflare](https://cloudflare.com)
