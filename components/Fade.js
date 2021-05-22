import styled from "styled-components";
import { DelayLink, DelayActiveLink } from "./DelayLink";

export const fadeTimeSeconds = 0.2;

const fadeInOutId = "fadeInOut";

export const FadeInOut = ({ children, ...rest }) => (
  <Style id={fadeInOutId} {...rest}>
    {children}
  </Style>
);

const Style = styled.div`
  animation: fadeMeIn ${fadeTimeSeconds}s forwards;
  &.fadingOut {
    animation: fadeMeOut ${fadeTimeSeconds}s forwards;
  }
`;

// export const FadeBack = ({ children, ...rest }) => {
//   const history = useHistory();
//   return (
//     <a
//       onClick={() => {
//         document.getElementById(fadeInOutId).classList.add("fadingOut");
//         setTimeout(() => {
//           document.getElementById(fadeInOutId).classList.remove("fadingOut");
//           history.goBack();
//         }, fadeTimeSeconds * 1000);
//       }}
//       {...rest}
//     >
//       {children}
//     </a>
//   );
// };

export const FadeLink = ({ href, ...rest }) => (
  <DelayLink
    href={href}
    delay={fadeTimeSeconds * 1000}
    onDelayStart={() => {
      document.getElementById(fadeInOutId).classList.add("fadingOut");
    }}
    onDelayEnd={() => {
      setTimeout(() => {
        document.getElementById(fadeInOutId).classList.remove("fadingOut");
      }, 60); // the timeout is a hack to prevent the content showing too early
    }}
    {...rest}
  />
);

export const FadeNavLink = ({ href, ...rest }) => (
  <DelayActiveLink
    href={href}
    delay={fadeTimeSeconds * 1000}
    onDelayStart={() => {
      document.getElementById("content").classList.add("fadingOut");
    }}
    onDelayEnd={() => {
      setTimeout(() => {
        document.getElementById("content").classList.remove("fadingOut");
      }, 60); // the timeout is a hack to prevent the content showing too early
    }}
    {...rest}
  />
);
