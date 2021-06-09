import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShortLinkInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('asdfasdfasdf');
    const request = context.switchToHttp().getRequest();
    const router = request.app._router;
    const routes = router.stack
      .map((layer) => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter((item) => item !== undefined);

    console.log('Before...', routes.map((item) => item.route.path).includes(request.route.path));
    // const ctx = context.switchToHttp();
    // const request = ctx.getRequest();
    // context.switchToHttp().getRequest().router
    // expressListRoutes();

    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
