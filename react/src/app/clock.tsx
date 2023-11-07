import { Component, ReactNode, useEffect, useState } from 'react';

type Props = {
  format?: string;
};

export class ClockClass extends Component<Props> {
  state = {
    now: new Date(),
    name: 'Romain'
  };

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        // on ne passe que les différences avec le state précédent
        now: new Date(),
      });
    }, 1000)
  }

  render(): ReactNode {
    const { now } = this.state;

    return <div className="ClockClass">{now.toLocaleTimeString()}</div>;
  }
}

export function ClockFunction({ format = 'HH:mm:ss' }: Props) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000)
  }, []);

  return <div className="ClockFunction">{now.toLocaleTimeString()}</div>;
}
