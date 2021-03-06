import { run } from '@ember/runloop';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Serializer | taxonomy', hooks => {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it serializes records', function(assert) {
        const record = run(() => this.owner.lookup('service:store').createRecord('taxonomy'));
        const serializedRecord = record.serialize();
        assert.ok(serializedRecord);
    });
});
