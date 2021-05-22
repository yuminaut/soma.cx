import styled from "styled-components";
import { BlipFadeNavLink } from "./Blip";
import { Flicker } from "./Flicker";

const pages = [
  { path: "/home", title: "Home" },
  // { path: "/tweets", title: "Tweets" },
  // { path: "/favorites", title: "Favorites" },
  // { path: "/misc", title: "Misc" },
  { path: "/chat", title: "Chat" },
];

export const Sidebar = ({ children }) => {
  return (
    <Container>
      <Header />
      <div id="links">
        {pages.map((page, idx) => (
          <NavigationLink key={idx} href={page.path}>
            {page.title}
          </NavigationLink>
        ))}
      </div>
      <br />
      {children}
    </Container>
  );
};

const Header = () => (
  <HeaderStyle>
    <Pink>[</Pink>
    <Flicker>soma.cx</Flicker>
    <Pink>]</Pink>
  </HeaderStyle>
);

const HeaderStyle = styled.h1`
  color: var(--nav-link-color);
  text-align: center;
  font-size: 29px;
  font-weight: 300;
`;

const Pink = styled.span`
  vertical-align: middle;
  color: var(--pink-color);
  text-shadow: 0 0 10px var(--pink-color);
  font-weight: 400;
  font-size: 1.1em;
`;

const Container = styled.div`
  padding: 1em;
  border-right: 10px solid #222;
  border-left: 10px solid #222;
  background: #1a1a1a;

  #links {
    border-radius: 10px;
    border: 5px outset #333;
    background: #202020;
    padding: 0.5em;
  }
`;

const NavigationLink = styled(BlipFadeNavLink)`
  &,
  :hover,
  :focus {
    color: var(--nav-link-color);
    background: #232323;
    border: 3px outset #2a2a2a;
    border-radius: 10px;
    display: block;
    padding: 0.2em 0.5em;
    margin: 0 0 0.5em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 0 0 3px var(--nav-link-shadow);
    font-weight: 300;
  }

  :hover,
  :focus {
    ::before {
      content: "- ";
    }
    ::after {
      content: " -";
    }
  }

  &.active {
    background: #202020;
    border: 3px inset #2a2a2a;
    font-weight: 500;
    ::before {
      content: "> ";
    }
    ::after {
      content: " <";
    }
  }
`;
