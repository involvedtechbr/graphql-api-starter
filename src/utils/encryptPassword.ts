import bcrypt from "bcrypt";
import logger from "../logger";

async function encryptPassword(
  password: string,
  salt: number,
): Promise<string> {
  try {
    const hash: string = await bcrypt.hash(password, salt);
    return hash;
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Unable to encrypt the password");
  }
}

export default encryptPassword;
