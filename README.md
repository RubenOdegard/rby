# RBY - Developer Portfolio

**Live Domains**

- [rubenodegard.com](https://rubenodegard.com)
- [rubenodegard.no](https://rubenodegard.no)
- [rby.no](https://rby.no)

> A Dockerfile is included if you want to run in as a standalone app.\
> Uncomment the line _**output: 'standalone',**_ in next.config.js.

```bash
$ docker build -t dev-port-docker .
$ docker run -p 3000:3000 dev-port-docker
```

### Implementasions

- [ ] **Split up site's config file into multiple files**
- [ ] **Code refactoring** - correctly split up components by the single
      reponsibility principle.
- [ ] **Visual overhaul on certain elements.**
- [ ] **Nextjs i18n** (internationalization)
- [x] **Umami Analytics** (open source alternative to google analytics) - _GDPR
      compliant, no cookies._
- [ ] **E2E tests using Cypress.** (config/activiites/certifications/projects)
