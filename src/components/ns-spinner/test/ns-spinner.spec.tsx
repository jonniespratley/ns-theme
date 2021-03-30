import { newSpecPage } from '@stencil/core/testing';
import { NsSpinner } from '../ns-spinner';

describe('ns-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NsSpinner],
      html: `<ns-spinner></ns-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <ns-spinner>
        <mock:shadow-root>
          <div class="ns-theme-spinner">
            <svg height="100" viewBox="0 0 100 100" width="100">
              <circle class="circle1" cx="50" cy="50" r="45"></circle>
              <circle class="circle2" cx="50" cy="50" r="45" transform="rotate(-45,50,50)"></circle>
            </svg>
          </div>
        </mock:shadow-root>
      </ns-spinner>
    `);
  });
});
