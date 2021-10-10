# base64-encoder-decoder

## Installation

```bash
npm install @prashoonb/base64-encoder-decoder
```

## API

### `base64.encode(input)`

This function takes a byte string (the `input` parameter) and encodes it according to base64.

```js
const base64 = require("@prashoonb/base64-encoder-decoder");

const text = "foo © bar 𝌆 baz";
const encoded = base64.encode(bytes);
console.log(encoded);
// → "Zm9vIMKpIGJhciDwnYyGIGJheg=="
```

### `base64.decode(input)`

This function takes a base64-encoded string (the `input` parameter) and decodes it.

```js
const encoded = "Zm9vIMKpIGJhciDwnYyGIGJheg==";
const text = utf8.decode(bytes);
console.log(text);
// → "foo © bar 𝌆 baz"
```

## Author

| [![twitter/prashoonb](https://s.gravatar.com/avatar/c6637efa5d5bb6861da578b5b933d2ab?s=80)](https://twitter.com/prashoonb "Follow @prashoonb on Twitter") |
|---|
| [Prashoon Bhattacharjee](https://prashoonb.tech/) |

## License

_base64-encoder-decoder_ is available under the [MIT](https://opensource.org/licenses/MIT) license.
