export class OpenApiObject{
    name: string;
    value?: OpenApiObject | string | number | boolean | OpenApiArray;
    valueType: OpenApiValueType;
    constructor(name: string, value?: OpenApiObject | string | number | boolean | OpenApiArray, valueType?: OpenApiValueType){
        this.name = name;
        this.value = value;
        this.valueType = valueType ?? OpenApiValueType.OBJECT;
    }
    // class for parsing openApi
}

export class OpenApiArray{
    name: string;
    value: OpenApiObject[];
    valueType: OpenApiValueType;
    constructor(name: string, value: OpenApiObject[]){
        this.name = name;
        this.value = value;
        this.valueType = OpenApiValueType.ARRAY;
    }
    // class for parsing
}

export enum OpenApiValueType {
    STRING = "string",
    OBJECT = "object",
    ARRAY = "array",
    NUMBER = "number",
    BOOLEAN = "boolean"
}

export class OpenApiValue{
    value: string | number | boolean | OpenApiObject | OpenApiArray;
    valueType: OpenApiValueType;
    constructor(value: string | number | boolean | OpenApiObject | OpenApiArray, valueType: OpenApiValueType){
        this.value = value;
        this.valueType = valueType;
    }
}