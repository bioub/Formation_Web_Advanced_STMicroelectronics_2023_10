enum Choice {
  YES,
  NO
}


function withEnum(choice: Choice) {

}

withEnum(Choice.YES);
// withEnum(0);
withEnum(Choice.NO);
// withEnum(1);


enum ChoiceWithValue {
  YES = 'yes',
  NO = 'no'
}

function withEnumWithValue(choice: ChoiceWithValue) {
  choice.toUpperCase()
}

withEnumWithValue(ChoiceWithValue.YES);
withEnumWithValue(ChoiceWithValue.NO);
