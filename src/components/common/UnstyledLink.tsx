import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { History, Location, LocationDescriptorObject } from "history";

interface Props extends React.ComponentProps<typeof RouterLink> {
  openInNew?: boolean;
}

/**
 * An unstyled link, which is used as part of our local Link component, or
 * can be passed to a `component=` prop on other Material UI components. This
 * provides automatic react-router and external link functionality, and also
 * fixes hash links for react-router. You shouldn't even render this directly,
 * only pass it as a `component=` prop. Otherwise, use the local `Link`
 * component.
 *
 * @param to The link target, either local or external
 */
const UnstyledLink = React.forwardRef(
  (
    { to, onClick, children, openInNew, ...rest }: Props,
    ref: React.Ref<HTMLAnchorElement>
  ): React.ReactElement => {
    const destString = to.toString();
    const external = Boolean(destString.match(/^\w+:/));
    const openInNewTab = openInNew ?? external;

    if (external) {
      return (
        <a
          ref={ref}
          href={destString}
          {...(openInNewTab
            ? {
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }

    // Use a react-router link. This needs some special behavior to handle hash
    // links, since those aren't supported natively.
    const hashFragment = getHashFragment(to);

    return (
      <RouterLink
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }

          if (hashFragment) {
            // Push onto callback queue so it runs after the DOM is updated
            window.setTimeout(() => {
              const element = document.getElementById(hashFragment);
              if (element) {
                scrollToElement(element);
              }
            });
          }
        }}
        to={to}
        {...rest}
        ref={ref}
      >
        {children}
      </RouterLink>
    );
  }
);

// This hash code is adapter from https://github.com/rafrex/react-router-hash-link

/**
 * Gets the hash portion of a link target.
 * @param to The link target
 * @return The hash target, or empty string if there is none
 */
function getHashFragment(
  to:
    | string
    | LocationDescriptorObject<unknown>
    | ((location: Location<unknown>) => History.LocationDescriptor<unknown>)
): string {
  let s: string;
  if (typeof to === "string") {
    s = to;
  } else if (typeof to === "object" && typeof to.hash === "string") {
    s = to.hash;
  } else {
    s = "";
  }
  // Get everything after the first #
  return s.substring(s.indexOf("#") + 1);
}

function isInteractiveElement(element: HTMLElement): boolean {
  const formTags = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"];
  const linkTags = ["A", "AREA"];
  return (
    (formTags.includes(element.tagName) && !element.hasAttribute("disabled")) ||
    (linkTags.includes(element.tagName) && element.hasAttribute("href"))
  );
}

/**
 * Scroll to the requested element and focus it. Ripped from
 * https://github.com/rafgraph/react-router-hash-link/blob/main/src/index.js
 * @param element Element to scroll to
 */
function scrollToElement(element: HTMLElement): void {
  element.scrollIntoView();

  // update focus to where the page is scrolled to
  // unfortunately this doesn't work in safari (desktop and iOS) when blur() is called
  const originalTabIndex = element.getAttribute("tabindex");
  if (originalTabIndex === null && !isInteractiveElement(element)) {
    element.setAttribute("tabindex", "-1");
  }
  element.focus({ preventScroll: true });
  if (originalTabIndex === null && !isInteractiveElement(element)) {
    // for some reason calling blur() in safari resets the focus region to where
    // it was previously, if blur() is not called it works in safari, but then
    // are stuck with default focus styles on an element that otherwise might
    // never had focus styles applied, so not an option
    element.blur();
    element.removeAttribute("tabindex");
  }
}

export default UnstyledLink;
