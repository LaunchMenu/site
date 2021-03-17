import {MdxRemote} from "next-mdx-remote/types";
import {markdownComponents} from "../components/markdownComponents";
import hydrate from "next-mdx-remote/hydrate";
import {ITOC} from "../TOCremarkPlugin";
import {Box} from "@material-ui/core";
import {PageIndexProvider} from "./PageIndexContext";
import {PageIndex} from "./PageIndex";

export default function MarkdownPage({
    source,
    ToC,
}: {
    source: MdxRemote.Source;
    ToC: ITOC;
}) {
    const content = hydrate(source, {components: markdownComponents});
    return (
        <PageIndexProvider>
            <Box
                display="flex"
                css={theme => ({
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: "column-reverse",
                    },
                })}>
                <Box
                    flexGrow={1}
                    flexShrink={1}
                    minWidth={0}
                    css={theme => ({
                        [theme.breakpoints.up("md")]: {
                            paddingRight: theme.spacing(2),
                        },
                    })}>
                    {content}
                    <Box height="80vh" />
                </Box>
                <PageIndex ToC={ToC} />
            </Box>
        </PageIndexProvider>
    );
}