import fs from 'fs'
import YAML, { Pair, Scalar, YAMLMap, isMap, isPair, isScalar } from 'yaml'
import { OpenApiObject, OpenApiValue, OpenApiValueType } from './openApi'

export class Parser {

  public parseYaml(filePath: string): YAML.Document {
    const file = fs.readFileSync(filePath, 'utf8')
    return YAML.parseDocument(file)
  }

  public parseObjectToOpenApiObject(object: unknown): OpenApiObject | undefined {
    if(isPair(object))
    {
        return this.parsePairToOpenApiObject(object);
    }
    return undefined;
  }

  public parsePairToOpenApiObject(pair: Pair): OpenApiObject {
    let name: string | "" = "";
    let openApiValue: OpenApiValue | undefined;
    if(isScalar(pair.value))
    {
        name = this.parseScalarToOpenApiObjectName(pair.value);
    }
    if(isMap(pair.value))
    {
        openApiValue = this.parseMapToOpenApiObject(pair.value);
    }


    return new OpenApiObject(name, openApiValue?.value, openApiValue?.valueType);
  }

  public parseMapToOpenApiObject(map: YAMLMap): OpenApiValue {
    return new OpenApiValue(new OpenApiObject("test"), OpenApiValueType.OBJECT);
}

  public parseScalarToOpenApiObjectName(scalar: Scalar): string {
    return scalar.value as string;
  }
}


/*

isDocument(doc) === true
isNode(doc) === false
isMap(doc.contents) === true
isNode(doc.contents) === true
isPair(doc.contents.items[0]) === true
isCollection(doc.get('foo')) === true
isScalar(doc.getIn(['foo', 1])) === true

*/