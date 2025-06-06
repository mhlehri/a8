import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { borrowReturnService } from "./borrowReturn.service";

/**
 * Borrow Return Controller
 * Handles all HTTP requests related to book borrowing and returning operations
 */

// Process book borrowing request
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

// Process book return request
const returnABook = CatchAsync(async (req, res) => {
  const result = await borrowReturnService.returnABook(req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

// Retrieve list of overdue borrowed books
const borrowOverdueList = CatchAsync(async (req, res) => {
  const result = await borrowReturnService.borrowOverdueList();

  sendResponse(res, {
    success: true,
    status: 200,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result || [],
  });
});

export const borrowReturnController = {
  borrowABook,
  returnABook,
  borrowOverdueList,
};
