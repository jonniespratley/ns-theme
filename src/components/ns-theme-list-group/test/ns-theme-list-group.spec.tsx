import { newSpecPage } from '@stencil/core/testing';
import { NsThemeListGroup } from '../ns-theme-list-group';

describe('ns-theme-list-group', () => {
  let page: SpecPage;
  let element;

  it('should build', () => {
    expect(new NsThemeListGroup()).toBeTruthy();
  });

  beforeEach(async () => {
    page = await newSpecPage({
      components: [NsThemeListGroup],
      html: '<ns-theme-list-group></ns-theme-list-group>'
    });
    element = await page.doc.querySelector('ns-theme-list-group');
  });

  it('should have rendered', async () => {
    expect(element).toBeTruthy();
  })
});
