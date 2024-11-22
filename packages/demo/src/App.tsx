import { A, H1, H2, H3, H4, H5, H6, HtmlSanitizedContent, P } from '@masa-dev/mui-enhance';
import { SpanButton } from '@masa-dev/mui-enhance/client';
import { NumberInput, PercentageInput } from '@masa-dev/mui-enhance/client/inputs';
import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';

export default function App() {
    return <Stack>
        <Headers />
        <Paragraphs />
        <LinksAndButtons />
        <HTMLs />
        <Inputs />
    </Stack >
}

function Headers() {
    return <Group name="Headers">
        <H1>MUI Header1</H1>
        <H2>MUI Header2</H2>
        <H3>MUI Header3</H3>
        <H4>MUI Header4</H4>
        <H5>MUI Header5</H5>
        <H6>MUI Header6</H6>
    </Group>
}

function Paragraphs() {
    return <Group name="Paragraphs">
        <P>MUI Paragraph</P>
    </Group>
}

function LinksAndButtons() {
    return <Group name="Links and Buttons">
        <A href="https://google.com">MUI Link</A>
        <SpanButton onClick={() => alert('clicked')}>SpanButton</SpanButton>
    </Group>
}

function HTMLs() {
    return <Group name="HTML">
        <HtmlSanitizedContent html={"<p>script in html is <b>sanitized</b></p><script>alert('Hello World!')</script>"} />
    </Group>
}

function Inputs() {
    const [n, setN] = useState<number | undefined>();
    const [currency, setCurrency] = useState<number | undefined>();
    const [percentage, setPercentage] = useState<number | undefined>();
    return <Group name="Inputs">
        {n}
        <NumberInput value={n} onChange={setN} />
        {currency}
        <NumberInput endText='JPY' value={currency} onChange={(v) => setCurrency(v)} />
        {percentage}
        <PercentageInput value={percentage} onChange={(v) => setPercentage(v)} />
    </Group>
}

function Group(props: { name: string, children: React.ReactNode }) {
    return <Stack sx={{ padding: 1 }}>
        <Box sx={{ background: "#999", color: "white", padding: "0.3em 0.8em" }}>{props.name}</Box>
        <Stack sx={{ padding: 2 }}>
            {props.children}
        </Stack>
    </Stack>
}