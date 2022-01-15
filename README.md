# Blog Frontend

This is the React frontend made to interact with the Blog API. Users can create and account and log in with a username and password which saves a JWT token in localStorage. This token is passed with every request to make check session is still valid.

Users view all published posts, read, like, leave comments, delete their own comments.

## How to set up

```bash
git clone git@github.com:mdesanker/members-blog-public.git
cd members-blog-public
npm install
npm start
```

## Built with

- React
- Redux
- React-Router
- Axios
- styled-components
