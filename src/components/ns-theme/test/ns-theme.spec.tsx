import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { NsThemeHeader } from '../../ns-theme-header/ns-theme-header';
import { NsThemeTabs } from '../../ns-theme-tabs/ns-theme-tabs';
import { NsTheme } from '../ns-theme';

describe('ns-theme', () => {

  let page: SpecPage;
  let element;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [NsTheme, NsThemeHeader, NsThemeTabs],
      html: `<ns-theme></ns-theme>`
    });
    element = await page.doc.querySelector('ns-theme');
  });

  it('should build', () => {
    expect(new NsTheme()).toBeTruthy();
  });

  it('should render', async () => {
    console.log(page.root.innerHTML);
  })

});
