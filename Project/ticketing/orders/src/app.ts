import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@cekodev/common";
import { newOrderRouter } from "./routes/new";
import { showTickerRouter } from "./routes/show";
import { indexOrdersRouter } from "./routes";
import { deleteOrderRouter } from "./routes/delete";


const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser)
app.use(showTickerRouter)
app.use(newOrderRouter)
app.use(indexOrdersRouter)
app.use(deleteOrderRouter)

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app }