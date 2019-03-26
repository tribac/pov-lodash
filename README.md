# pov-lodash

`povjs` extension leveraging `lodash` to support (nested &amp; complex) path.

```javascript
import { pov } from 'povjs-lodash';

const ipa = {
  oof: {
    { rab: 1 }
  }
}
function mapBar() {
  return pov(source, {
    bar: 'oof.rab' // can be anything supported by lodash.get
  });
}
const mapped = mapBar(ipa);
mapped.bar === ipa.oof.rab; // true
mapped.bar = 2;
mapped.bar === ipa.oof.rab; // still true
```

`povjs`'s `array` is also pre-configured to work with `lodash` backed `getter` & `setter`.
