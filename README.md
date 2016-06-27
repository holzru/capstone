# FresherNote

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

HellaMeets is a web application inspired by Meetup that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Members
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Groups with members
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Events for groups
  - [ ] Invitations for group members to group events
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Members register for events
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication, Models (2 days, W1 Wed 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create Models
- [ ] authentication
- [ ] user signup/signin pages
- [ ] splash page after signin
- [ ] setup Webpack & Flux scaffold

# Phase 2: Flux Architecture and Group Continued (2 days Friday W1 6pm)

- Finish out Actions/Stores for events/groups
- [ ] seed the database with a small amount of test data
- API for groups/events
- [ ] jBuilder views for groups/events
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each component, building out the flux loop as needed.


### Phase 3: Search (2 days, W2 M 6pm)
- Setup global search
- allow for search through users/groups/events
- pane filtering for toggling between calendar vs Bootstrap view


### Phase 4: Styling (2 days, W2 Tue 6pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] learn bootstrap-sass
- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reminders and Garbage Collection, Fix Up (2 days, W2 Thur 6pm)
- reminder model and Implementation
- [ ] additional styling as needed
- bug fix, code refactoring

### Phase 6: Extra Time for whatever is needed or bonus work (1 day, W2 Fri 6pm)

### Bonus Features (TBD)
- [ ] Google Map Directions for events
- [ ] Automatic email notification of events
- [ ] slack client in page
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
