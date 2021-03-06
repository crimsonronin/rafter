import { IController } from 'rafter';
import { Request, Response } from 'express';
import { SimpleExampleAppConfig } from '../../config/config';

type IOtherController = IController;
export default class OtherController implements IOtherController {
  constructor(private readonly config: SimpleExampleAppConfig) {}

  public index(request: Request, response: Response): void {
    response.send(
      `
      Config drives all the things. It is accessible via "config.key.otherkey": ${this.config.message}
      <br>
      <br>
      <a href="/">Go back to home</a>
      `,
    );
  }
}
