# Wong Family Website

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
You can preview the production build with `npm run preview`.

## Deploying
Note to Luke...
To deploy to the Oracle VPS, use the command:

```bash
./wong-family-deploy.sh
```

For security reasons, the shell script is not available on GitHub. Reach out to Luke to get a copy of the deployment script and other environment variables.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


## Routes

### GET `/`
Home page, welcome message, instructions on the website, Wong Sing Chew picture?

**All routes below here require authentication**

### GET `/tree`
An interactive family tree, ability to search for a family member

### GET `/gallery`
A sorted and tagged gallery of images uploaded by any family member

### GET/POST `/gallery/upload`
A form to upload an individual image along with a title, description, names of every person in the photo, and tags. Could also have categories like "Family picnic" or "Graduation photos" etc.

### GET/POST `/gallery/edit/id`
Edit an existing gallery submission

### GET `/timeline`
Explore an interactive timeline of user-submitted events

### GET/POST `/timeline/event`
A form to enter an event into the timeline table

### GET `/stories`
Explore user submitted testimonies and stories

### GET/POST `/stories/new`
A form with a title, markdown body, and a field to enter all the names of individuals mentioned in the story. Could also include a way to link to images already in the gallery that will display in a head scroll box

### GET/POST `/stories/edit/id`
Similar to `/stories/new`, just has the existing values and user is able to edit them.

