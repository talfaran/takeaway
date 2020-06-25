import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

fdescribe('UsersService', () => {
  let service: UsersService = TestBed.get(UsersService);

  beforeEach(() => {
    service = TestBed.get(UsersService);
    TestBed.configureTestingModule({});

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  fit('should test to createPostByUserId function', () => {
    const posts: any = [
      {
        id: 1,
        userId: 2,
        title: 'somthing',
        body: 'somthing'
      },
      {
        id: 2,
        userId: 2,
        title: 'somthing',
        body: 'somthing'
      },
      {
        id: 3,
        userId: 3,
        title: 'somthing',
        body: 'somthing'
      }
    ];
    const postsByUserId = service.createPostsByUserId(posts);
    expect(postsByUserId).toEqual([
      {
        userId: 2,
        posts: [
          {
            id: 3,
            userId: 3,
            title: 'somthing',
            body: 'somthing'
          }
        ]
      },
      {
        userId: 3,
        posts: [
          {
            id: 1,
            userId: 2,
            title: 'somthing',
            body: 'somthing'
          },
          {
            id: 2,
            userId: 2,
            title: 'somthing',
            body: 'somthing'
          },
        ]
      }
    ]);
  });
});
});

