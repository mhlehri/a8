import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { borrowReturnService } from "./borrowReturn.service";

const borrowABook = CatchAsync(async (req, res) => {
  const result = await borrowReturnService.borrowABook(req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});
const returnABook = CatchAsync(async (req, res) => {});

export const borrowReturnController = {
  borrowABook,
  returnABook,
};
