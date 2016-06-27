# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Members

- `GET /members`
- `POST /members`
- `PATCH /members/memberId/edit`

### Events

- `GET /events`
  - Events index/search
  - accepts `event_category` query param to list events by category
  - accepts pagination params (if I get there)
- `POST /events`
- `GET /events/:eventid`
- `PATCH /events/:eventid/edit`
- `DELETE /events/:eventid`

### Groups

- `GET /groups`
- `POST /groups`
- `GET /groups/:groupid`
- `PATCH /groups/:groupid`
- `DELETE /groups/:groupid`
