import styles from './styles.module.css';

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder }: AvatarProps) {
  return <img className={hasBorder ? styles.avatar_with_border : styles.avatar} src={src} />;
}
