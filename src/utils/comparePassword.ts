import bcrypt from "bcrypt";
import logger from "../logger";

async function comparePassword(
  password: string,
  passwordEncrypted: string,
): Promise<boolean> {
  try {
    const isMatchPassword: boolean = await bcrypt.compare(
      password,
      passwordEncrypted,
    );
    return isMatchPassword;
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
    }

    throw new Error("Unable to decrypt password");
  }
}

export default comparePassword;
