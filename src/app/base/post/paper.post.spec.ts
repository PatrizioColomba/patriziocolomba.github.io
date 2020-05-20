import { Paper } from './paper.post';
import { PaperMock } from './paper.post.mock';

describe('App', () => {
  it('should create an instance', () => {
    expect(new Paper(PaperMock.TITLE, PaperMock.TEXT)).toBeTruthy();
  });
});
