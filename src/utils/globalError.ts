import { NextFunction, Request, Response } from 'express';

const globalError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error:any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.status(500).json({
      success: false,
      massage: 'wrong went data',
      error: error,
    });
  } catch (error) {
    next(error);
  }
};

export default globalError;