import 'testcafe';
import { Selector } from 'testcafe';

fixture`index.html`.page('../__test__/fixture/dist/index.html');

// @ts-ignore
test('proofs an icon is rendered', async (t: TestController) => {
    const icon = Selector(() => document.body.querySelector('i'));
    await t.expect((await icon()).classNames).contains('fas');
});
