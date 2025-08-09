import express from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';
import { dirname } from 'path';
import indexRoutes from './routes/index.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
dotenv.config();

app.use("/", indexRoutes);


app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running at port ${process.env.PORT||3000}`);
});