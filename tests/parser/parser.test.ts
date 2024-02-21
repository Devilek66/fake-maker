import { Parser } from "../../src/parser/parser";
import YAML, { Pair, Scalar, YAMLMap } from 'yaml'


describe('Parser', () => {
    it('should parse', async () => {
      let parser = new Parser();
      let parsed = parser.parseYaml("tests/testData/simpleObject.yaml");
      const repository = parsed.get("repository", true) as YAMLMap;
        console.log(repository);
        const firstItem = repository.items[0] as Pair;
        const name = ((firstItem.key) as Scalar).value as string;
        console.log(name);
        const value = ((firstItem.value) as Scalar).value;
        // iterate over the schemas
        console.log(value);
        
        
      expect(parsed).not.toBeNull();
        //expect(components).not.toBeNull();
    })
});