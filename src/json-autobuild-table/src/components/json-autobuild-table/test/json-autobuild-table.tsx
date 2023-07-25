import { newSpecPage } from '@stencil/core/testing';
import { JsonAutobuildTable } from '../json-autobuild-table';

describe('json-autobuild-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JsonAutobuildTable],
      html: `<json-autobuild-table></json-autobuild-table>`,
    });
    expect(page.root).toEqualHtml(`
      <json-autobuild-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </json-autobuild-table>
    `);
  });
});

