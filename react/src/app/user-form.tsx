import { FormEvent, useState } from "react";

type Props = {};


export function UserForm({  }: Props) {

  const [name, setName] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('TODO: Send data to server');
    console.log('name: ', name);
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <div>
        Name : <input onInput={(event) => setName((event.target as HTMLInputElement).value)} />
      </div>
      <div>
        Age : <input />
      </div>
      <div>
        Active : <input />
      </div>
      <div>
        <button>Go</button>
      </div>
      <p>Name : {name}</p>
    </form>
  );
}

export default UserForm;
