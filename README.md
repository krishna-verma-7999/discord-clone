- first setup your project using shadcn
- depending on which style we use of shadcn we gonna have different icons.
- for authentication we gonna follow clerk docs.
- for theme install an package called next-theme.

# Database :-

1. npm i -D prisma
2. npx prisma init
3. @db.Text is basically used for long string
4. npx prisma generate
5. npx prisma db push
6. npm i @prisma/client
7. In Production, To prevent hot reload we gonna declare global variable to store our database client.
