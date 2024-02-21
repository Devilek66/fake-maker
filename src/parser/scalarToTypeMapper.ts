import { Scalar } from "yaml";
import { OpenApiValueType } from "./openApi";

export class ScalarToTypeMapper {
    public static mapScalarToType(scalar: Scalar): OpenApiValueType { // TODO: add support for other types than string, number and boolean
        switch (scalar.value) {
            case "string":
                return OpenApiValueType.STRING;
            case "number":
                return OpenApiValueType.NUMBER;
            case "boolean":
                return OpenApiValueType.BOOLEAN;
            case "object":
                return OpenApiValueType.OBJECT;
            default:
                return OpenApiValueType.STRING;
        }
    }
}