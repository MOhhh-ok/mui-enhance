import { Button, ButtonProps, Link, LinkProps, Typography, TypographyProps } from '@mui/material';
import sanitize, { IOptions } from 'sanitize-html';

export function P({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="body1" component="p" {...props}>
            {children}
        </Typography>
    );
};

export function A({ children, ...props }: LinkProps) {
    return <Link {...props}>{children}</Link>
}

export function H1({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h1" component="h1" {...props}>
            {children}
        </Typography>
    );
};

export function H2({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h2" component="h2" {...props}>
            {children}
        </Typography>
    );
};

export function H3({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h3" component="h3" {...props}>
            {children}
        </Typography>
    );
};

export function H4({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h4" component="h4" {...props}>
            {children}
        </Typography>
    );
};

export function H5({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h5" component="h5" {...props}>
            {children}
        </Typography>
    );
};

export function H6({ children, ...props }: TypographyProps) {
    return (
        <Typography variant="h6" component="h6" {...props}>
            {children}
        </Typography>
    );
};

export function HtmlSanitizedContent(props: { html: string | null | undefined, sanitizeOptions?: IOptions }) {
    const { html, sanitizeOptions } = props;
    const sanitized = sanitize(html ?? '', sanitizeOptions);
    return <span dangerouslySetInnerHTML={{ __html: sanitized || '' }} />
}

export function LinkButton(props: ButtonProps & { href: string }) {
    const { href } = props;

    return <A href={href} sx={{ textDecoration: "none", border: 0 }}>
        <Button {...props} />
    </A>
}
