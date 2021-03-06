import { ILogger } from '@rafterjs/logger-plugin';
import { IMiddleware, INextFunction, IRequest, IResponse } from '../../../../lib';

export default function requestLogger(logger: ILogger): IMiddleware {
  return function middleware(request: IRequest, response: IResponse, next: INextFunction): void {
    logger.info('This is the message of the day');
    next();
  };
}
