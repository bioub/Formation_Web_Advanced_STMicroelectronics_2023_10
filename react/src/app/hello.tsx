type Props = {
  name: string;
  age: number;
  isActive?: boolean;
};

export function Hello({ name, age, isActive = false }: Props) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age}
    </div>
  );
}

export default Hello;
