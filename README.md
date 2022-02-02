# CODE ESI Admin Dashboard

## About the project

This is the dashboard admin app to manage [codeesi.com](https://codeesi.com) data using [CODE ESI GRAPHQL API](https://github.com/AhmedCoolProjects/CodeESIGraphqlAPI)



## Used technical skills

- ReactJS
- Next.js
- GraphQL
- Apollo Client
- MUI
- MUI-Icons
- TailwindCSS
- Vercel
- Figma

## Pages

![image](https://user-images.githubusercontent.com/72823374/152119732-5b67be98-f4f8-4da3-80c0-144450831113.png)

- **_/myapi/v1/admin:_** Route page for our API
- **_/myapi/v1/admin/activities:_** Dashboard to visualize activities data and manage it
- **_/myapi/v1/admin/organizations:_** Dashboard to visualize organizations data and manage it
- **_/myapi/v1/admin/persons:_** Dashboard to visualize persons data and manage it

![image](https://user-images.githubusercontent.com/72823374/152119879-a13155b4-f0fd-4fe8-bcad-aa4485ce3447.png)


## Queries -Requesting data from backend API-:

under `/apollo/graphql/queries.js` our queries objects to request data from the backend API [CODE ESI GRAPHQL API](https://github.com/AhmedCoolProjects/CodeESIGraphqlAPI)

## Mutations -CRUD Operations using the backend API-:

under `/apollo/graphql/mutations.js` our mutations objects to add, update and delete data using mutations defined in the backend API [CODE ESI GRAPHQL API](https://github.com/AhmedCoolProjects/CodeESIGraphqlAPI)

![image](https://user-images.githubusercontent.com/72823374/152119959-caf55182-643f-458f-96c9-fb4dad381a6f.png)

![image](https://user-images.githubusercontent.com/72823374/152119968-67b110cb-18d5-464d-9d14-859e390f20dc.png)


## Authentication for admin

### Firebase Authentication API

To prevent access to the dashboard admin for everyone.

## Storing files

### Firebase Storage API

to store images in GCP

## Deployement

The Admin Dashboard is deployed on Vercel platform, and it uses its backend API [CODE ESI GRAPHQL API](https://github.com/AhmedCoolProjects/CodeESIGraphqlAPI) to manage data for the frontend [codeesi.com](https://codeesi.com)

## Visit my portfolio

[Ahmed Bargady](https://ahmedbargady.me)
