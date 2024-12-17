import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from '@app/common';

const getCurrentUserByContext = (ctx: ExecutionContext): UserDocument => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserDocument =>
    getCurrentUserByContext(ctx),
);
