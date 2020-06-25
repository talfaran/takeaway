import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, of, concat, EMPTY, throwError } from 'rxjs';
import { switchMap, concatMap, map, catchError, retryWhen, delay, take, finalize, takeWhile } from 'rxjs/operators'
import { LoggerService } from 'projects/logger/src/public_api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private isAlive = true;
  public posts$;
  private httpRequest = this._http.get('https://jsonplaceholder.typicode.com/posts')
  .pipe(
    map((posts: IPostModel[]) => {
      return this.createPostsByUserId(posts);
    }),
    catchError((err) => {
      this.logger.print(err);
      return throwError(err);
    }),
    retryWhen(errors => errors.pipe(delay(500), take(5))),
    finalize(() => this.isAlive = false)
    );

  public trigger$ = interval(60000).pipe(
    takeWhile(() => this.isAlive )
  );
  public delayPosts$ = this.trigger$.pipe(
    switchMap(() => this.httpRequest)
  );

  constructor(private _http: HttpClient, private logger: LoggerService
  ) {
    this.posts$ = concat(this.httpRequest, this.delayPosts$);
  }

  createPostsByUserId(posts: IPostModel[]) {
    const postsById = {};
    posts.forEach(post => {
      if (postsById[post.userId]) {
        postsById[post.userId].push(post);
      } else {
        postsById[post.userId] = [];
      }
    });
    const postByIdArr = [];
        for (const key in postsById) {
          if (postsById.hasOwnProperty(key)) {
            postByIdArr.push({
              userId: key,
              posts: postsById[key]
            });

          }
        }
        return postByIdArr;
  }
}

export interface IPostModel {
  id: string;
  userId: string;
  title: string;
  body: string;
}
