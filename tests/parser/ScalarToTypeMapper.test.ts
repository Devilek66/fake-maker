import { Scalar } from 'yaml'
import { ScalarToTypeMapper } from "../../src/parser/scalarToTypeMapper";
import { OpenApiValueType } from "../../src/parser/openApi";


describe('mapScalarToType', () => {
    it('should return object', async () => {
      const scalar = new Scalar("object");
      scalar.range = [ 22, 28, 30 ];
      scalar.source = "object";
      scalar.type = "PLAIN";

      const openApiType = ScalarToTypeMapper.mapScalarToType(scalar);

      expect(openApiType).toEqual(OpenApiValueType.OBJECT);
    })
});