import { connect, clean, close } from "./database";

beforeAll(async () => {
  await connect();
});

afterAll(async () => {
  await clean();
  await close();
});
