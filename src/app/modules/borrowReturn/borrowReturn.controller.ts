import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { borrowReturnService } from "./borrowReturn.service";

const borrowABook = CatchAsync(async (req, res) => {
  const result = await borrowReturnService.borrowABook(req.body);

  const resultData: Record<string, any> = {};
  if (result) {
    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        const typedKey = key as keyof typeof result;
        if (result[typedKey] !== null) {
          resultData[typedKey] = result[typedKey];
        }
      }
    }
  }

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: resultData,
  });
});
const returnABook = CatchAsync(async (req, res) => {});

export const borrowReturnController = {
  borrowABook,
  returnABook,
};
