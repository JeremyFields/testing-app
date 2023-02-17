/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateGameInputValues = {
    Name?: string;
    Price?: number;
};
export declare type CreateGameValidationValues = {
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateGameOverridesProps = {
    CreateGameGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateGameProps = React.PropsWithChildren<{
    overrides?: CreateGameOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateGameInputValues) => CreateGameInputValues;
    onSuccess?: (fields: CreateGameInputValues) => void;
    onError?: (fields: CreateGameInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateGameInputValues) => CreateGameInputValues;
    onValidate?: CreateGameValidationValues;
} & React.CSSProperties>;
export default function CreateGame(props: CreateGameProps): React.ReactElement;
