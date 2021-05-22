import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

export const DelayLink = ({
  children,
  href,
  delay,
  onDelayStart = () => {},
  onDelayEnd = () => {},
  ...rest
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    onDelayStart();
    setTimeout(() => {
      router.push(href);
      onDelayEnd();
    }, delay);
  };

  return (
    <Link href={href}>
      <a onClick={handleClick} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export const DelayActiveLink = ({
  children,
  href,
  exact,
  delay,
  onDelayStart = () => {},
  onDelayEnd = () => {},
  ...rest
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    onDelayStart();
    setTimeout(() => {
      router.push(href);
      onDelayEnd();
    }, delay);
  };

  return (
    <ActiveLink href={href} activeClassName="active" exact={exact}>
      <a onClick={handleClick} {...rest}>
        {children}
      </a>
    </ActiveLink>
  );
};
