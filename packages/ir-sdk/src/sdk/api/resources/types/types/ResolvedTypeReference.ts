/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ResolvedTypeReference =
    | FernIr.ResolvedTypeReference.Container
    | FernIr.ResolvedTypeReference.Named
    | FernIr.ResolvedTypeReference.Primitive
    | FernIr.ResolvedTypeReference.Unknown;

export namespace ResolvedTypeReference {
    export interface Container extends _Utils {
        type: "container";
        container: FernIr.ContainerType;
    }

    export interface Named extends FernIr.ResolvedNamedType, _Utils {
        type: "named";
    }

    export interface Primitive extends _Utils {
        type: "primitive";
        primitive: FernIr.PrimitiveType;
    }

    export interface Unknown extends _Utils {
        type: "unknown";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.ResolvedTypeReference._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        container: (value: FernIr.ContainerType) => _Result;
        named: (value: FernIr.ResolvedNamedType) => _Result;
        primitive: (value: FernIr.PrimitiveType) => _Result;
        unknown: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ResolvedTypeReference = {
    container: (value: FernIr.ContainerType): FernIr.ResolvedTypeReference.Container => {
        return {
            container: value,
            type: "container",
            _visit: function <_Result>(
                this: FernIr.ResolvedTypeReference.Container,
                visitor: FernIr.ResolvedTypeReference._Visitor<_Result>,
            ) {
                return FernIr.ResolvedTypeReference._visit(this, visitor);
            },
        };
    },

    named: (value: FernIr.ResolvedNamedType): FernIr.ResolvedTypeReference.Named => {
        return {
            ...value,
            type: "named",
            _visit: function <_Result>(
                this: FernIr.ResolvedTypeReference.Named,
                visitor: FernIr.ResolvedTypeReference._Visitor<_Result>,
            ) {
                return FernIr.ResolvedTypeReference._visit(this, visitor);
            },
        };
    },

    primitive: (value: FernIr.PrimitiveType): FernIr.ResolvedTypeReference.Primitive => {
        return {
            primitive: value,
            type: "primitive",
            _visit: function <_Result>(
                this: FernIr.ResolvedTypeReference.Primitive,
                visitor: FernIr.ResolvedTypeReference._Visitor<_Result>,
            ) {
                return FernIr.ResolvedTypeReference._visit(this, visitor);
            },
        };
    },

    unknown: (): FernIr.ResolvedTypeReference.Unknown => {
        return {
            type: "unknown",
            _visit: function <_Result>(
                this: FernIr.ResolvedTypeReference.Unknown,
                visitor: FernIr.ResolvedTypeReference._Visitor<_Result>,
            ) {
                return FernIr.ResolvedTypeReference._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.ResolvedTypeReference,
        visitor: FernIr.ResolvedTypeReference._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "container":
                return visitor.container(value.container);
            case "named":
                return visitor.named(value);
            case "primitive":
                return visitor.primitive(value.primitive);
            case "unknown":
                return visitor.unknown();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
