import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string | URL;
  children?: ReactNode;
};

export default function NextLink({ href, children, ...props }: Props) {
  return <a href={String(href)} {...props}>{children}</a>;
}
