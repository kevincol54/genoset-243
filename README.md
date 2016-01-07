# genoset-243

This script determines if a genome has at least 4 of 5 genotypes which increase, by approximately 50%, the risk of prostate cancer patients dying of disease, as per [gs243](http://www.snpedia.com/index.php/Gs243)

*This does not increase your risk of getting cancer, however*

## Compatibility

This genoset is to be used with DNA-JSON. See [dna2json](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var increasedRisk = require('genoset-243');
var dna = require('./dna.json');

console.log(increasedRisk(dna));
// → `true` or `false`
```

## Author

| [![twitter/kevco54](https://gravatar.com/avatar/c3f0cac49ad7d267cb58499a86bfdd19)](https://twitter.com/kevco54 "Follow @kevco54 on Twitter") |
|---|
| [Kevin Collins](https://iamkevin.co/) |

## License

_genoset-243_ is available under the [MIT](https://mths.be/mit) license.