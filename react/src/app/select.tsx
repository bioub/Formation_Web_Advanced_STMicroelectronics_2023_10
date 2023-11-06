import { ReactNode } from 'react';
import styles from './select.module.scss';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
};

function Select({ options }: Props) {
  const menuOpen = true;

  // JSX Conditionnel
  // let menu = null;
  // if (menuOpen) {
  //   menu = <div className={styles.menu}>Menu (qui affiche les options)</div>;
  // }

  // Sous forme d'expression conditionnelle (avec un ternaire)
  // const menu = (menuOpen) ? <div className={styles.menu}>Menu (qui affiche les options)</div> : null;

  // Sous forme d'expression conditionnelle (avec un ET logique)
  // const menu = menuOpen && <div className={styles.menu}>Menu (qui affiche les options)</div>;

  // Listes en JSX
  // const items: ReactNode[] = [];

  // for (const option of options) {
  //   items.push(<div key={option.value}>{ option.label }</div>)
  // }

  // Sous forme d'expression boucle
  const items = options.map((option) => <div key={option.value}>{ option.label }</div>);

  return (
    <div className={styles.Select}>
      <div className={styles.selected}>Selected value</div>
      {menuOpen && (
        <div className={styles.menu}>
          {items}
        </div>
      )}
    </div>
  );
}

export default Select;

/*
Exemple <div>{value}</div>
En JSX dans les accolades on peut demander à afficher les expressions suivantes :
- string (la valeur s'affiche)
- number (la valeur s'affiche)
- boolean (la valeur ne s'affiche pas)
- null et undefined (la valeur ne s'affiche pas)
- Element React (en JSX ou avec React.createElement) (qui s'affiche)
- un tableau de string, number, boolean, null, undefined ou Element (affiche que les élements string, number et Element)

Dit autrement tout peut s'afficher sauf les objets autre que string, array et Element React
*/
