// const spanEl = document.createElement('span');
//   spanEl.className = style.todosSpanValue;
//   spanEl.innerText = val;
//   return spanEl;

import { ReactNode } from "react";

type Props = {
  value: string;
}

function TodoSpanValue({ value }: Props): ReactNode {
  return (
    <span className="TodoSpanValue">
      {value}
    </span>
  )
}

export default TodoSpanValue;