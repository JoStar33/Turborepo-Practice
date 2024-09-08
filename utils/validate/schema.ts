import { validation } from "./validation";
import * as yup from "yup";

/** PDF 제목변경 */
const pdfTitleSchema = yup.object({
  title: validation.REQUIRED_TEXT_4({ minLength: 1, maxLength: 15 }),
});

export const schema = {
  pdfTitleSchema,
};
