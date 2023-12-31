/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = error.message || 'Internal Server Error'
  return res.status(statusCode).json({
    successs: false,
    message,
    error
  })
}
export default globalErrorHandler
