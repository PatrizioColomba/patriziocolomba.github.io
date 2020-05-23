import { Paper } from './paper.post';
import { PAPERS } from './paper.post.mock';

describe('App', () => {
  it('should create an instance', () => {
    expect(PAPERS[0]).toBeTruthy();
  });
});
