import { newE2EPage } from '@stencil/core/testing';

describe('json-autobuild-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<json-autobuild-table></json-autobuild-table>');

    const element = await page.find('json-autobuild-table');
    expect(element).toHaveClass('hydrated');
  });
});

