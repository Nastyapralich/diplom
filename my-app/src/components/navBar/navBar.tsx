import styles from "./navBar.module.scss";

type NavBarProps = {
  content: string[];
  onClick?: () => void;
};

export const NavBar = (props: NavBarProps) => {
  return (
    <div className={styles.container}>
      {props.content.map((element, index) => (
        <span key={index} className={styles.navBarItem} onClick={props.onClick}>{element}</span>
      ))}
    </div>
  );
};