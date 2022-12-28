# NestJS APIs

```bash
nest generate module users
nest generate module reports
nest generate controller users
nest generate controller reports
nest generate service users
nest generate service reports
# --flat means don't create contoller folder.
nest generate controller messages/messages --flat

## validation layers for nest js
yarn add class-validator class-transformer
yarn add @nestjs/typeorm typeorm sqlite3
yarn add cookie-session @types/cookie-session
yarn add @nestjs/config @types/express
# for env vars to works across different plateforms.  cross-env NODE_ENV=development
yarn add cross-env
yarn add mongoose @nestjs/mongoose
```
