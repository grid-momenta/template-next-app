/* eslint-disable @typescript-eslint/naming-convention */
import * as React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

// Add support for the sx prop for consistency with the other branches.
const Anchor: any = styled("a")({});

interface NextLinkComposedProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
		Omit<NextLinkProps, "href" | "as" | "onClick" | "onMouseEnter"> {
	to: NextLinkProps["href"];
	linkAs?: NextLinkProps["as"];
}

export const NextLinkComposed: React.ForwardRefExoticComponent<any> = React.forwardRef<
	HTMLAnchorElement,
	NextLinkComposedProps
>(function NextLinkComposed(props: NextLinkComposedProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
	const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } = props;

	return (
		<NextLink
			href={to}
			prefetch={prefetch}
			as={linkAs}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			passHref
			locale={locale}
		>
			<Anchor ref={ref} {...other} />
		</NextLink>
	);
});

export type LinkProps = {
	activeClassName?: string;
	as?: NextLinkProps["as"];
	href: NextLinkProps["href"];
	linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
	noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
	Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link: React.ForwardRefExoticComponent<any> = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
	props: LinkProps,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	const {
		activeClassName = "active",
		as,
		className: classNameProps,
		href,
		noLinkStyle,
		linkAs: linkAsProp,
		locale,
		prefetch,
		replace,
		scroll,
		shallow,
		...other
	} = props;

	const router = useRouter();
	const pathname = typeof href === "string" ? href : href.pathname;
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname === pathname && activeClassName,
	});

	const isExternal = typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

	if (isExternal) {
		if (noLinkStyle) {
			return <Anchor className={className} href={href} ref={ref} {...other} />;
		}

		return <MuiLink className={className} href={href} ref={ref} {...other} />;
	}

	const linkAs = linkAsProp || as;
	const nextJsProps = { to: href, linkAs, replace, scroll, shallow, prefetch, locale };

	if (noLinkStyle) {
		return <NextLinkComposed className={className} ref={ref} to={href} {...other} />;
	}

	return <MuiLink component={NextLinkComposed} className={className} ref={ref} {...nextJsProps} {...other} />;
});

export default Link;
