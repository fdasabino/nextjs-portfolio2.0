import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link
                href="https://fonts.googleapis.com/css?family=Space+Grotesk:300,regular,500,600,700&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css?family=Manrope:200,300,regular,500,600,700,800&display=swap"
                rel="stylesheet"
            />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
