import CatchAsync from "../../../helper/CatchAsync";

const borrowABook = CatchAsync(async (req, res) => {});
const returnABook = CatchAsync(async (req, res) => {});

export const borrowReturnController = {
  borrowABook,
  returnABook,
};
