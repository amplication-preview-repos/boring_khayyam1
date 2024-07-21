import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";

export const OptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" source="text" />
        <BooleanInput label="isCorrect" source="isCorrect" />
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
