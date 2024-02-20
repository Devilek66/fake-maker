import { testfunc } from "../../src/generator/generator";

describe('test', () => {
    it('should test', async () => {
      let leee = testfunc();
      expect(leee).not.toBeNull();
      expect(leee).toEqual("test");
    })
});