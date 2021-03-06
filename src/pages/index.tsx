import {Box, Container, Grid, Button} from "@material-ui/core";
import {BackgroundSection} from "../components/home/BackgroundSection";
import {Feature} from "../components/home/features/Feature";
import {FeatureCategory} from "../components/home/features/FeatureCategory";
import {FeatureVideo} from "../components/home/features/FeatureVideo";
import {Hero} from "../components/home/Hero";
import {SellingPoint} from "../components/home/SellingPoint";
import {LMVideosProvider} from "../components/home/videoService/LMVideosProvider";

// Don't auto scroll to position, since it messes with the hash
try {
    history.scrollRestoration = "manual";
} catch (e) {}

export default function Home() {
    return (
        <Container>
            <LMVideosProvider>
                <Hero>
                    <FeatureVideo
                        initVideo="videoTest4.mp4"
                        background="videoTest2.jpg"
                    />
                </Hero>

                <HorizontalList margin={2}>
                    <SellingPoint
                        title="Easy to use"
                        body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."
                    />
                    <SellingPoint
                        title="Customizable"
                        body="With the custom applet system, you can easily customize your LaunchMenu."
                    />
                    <SellingPoint
                        title="Easy to use"
                        body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."
                    />
                </HorizontalList>

                <BackgroundSection>
                    <FeatureCategory
                        category="Some shit"
                        video="videoTest2.mp4">
                        <Feature title="stuff" time={{start: 0, end: 3}}>
                            doShit
                        </Feature>
                        <Feature
                            title="orange"
                            time={{start: 4, end: 8}}
                            status="comingSoon">
                            doShitYes
                        </Feature>
                        <Feature
                            title="shit's planned"
                            time={{start: 9, end: 12}}
                            status={{type: "longTerm", tooltip: "hoi"}}>
                            So it's not here yet
                        </Feature>
                    </FeatureCategory>
                </BackgroundSection>

                <FeatureCategory category="Some stuff" video="videoTest3.mp4">
                    <Feature title="pop" time={{start: 0, end: 3}}>
                        orange
                    </Feature>
                    <Feature title="smth" time={{start: 4, end: 8}}>
                        craps
                    </Feature>
                </FeatureCategory>

                <BackgroundSection>
                    <FeatureCategory
                        category="Some shit"
                        video="videoTest2.mp4">
                        <Feature title="stuff" time={{start: 0, end: 3}}>
                            doShit
                        </Feature>
                        <Feature
                            title="orange"
                            time={{start: 4, end: 8}}
                            status="comingSoon">
                            doShitYes
                        </Feature>
                        <Feature
                            title="shit's planned"
                            time={{start: 9, end: 12}}
                            status={{type: "longTerm", tooltip: "hoi"}}>
                            So it's not here yet
                        </Feature>
                    </FeatureCategory>
                </BackgroundSection>

                <FeatureCategory category="Some stuff" video="videoTest3.mp4">
                    <Feature title="pop" time={{start: 0, end: 3}}>
                        orange
                    </Feature>
                    <Feature title="smth" time={{start: 4, end: 8}}>
                        craps
                    </Feature>
                </FeatureCategory>
            </LMVideosProvider>

            <div css={{height: 1000, marginTop: 20}}>
                Some extra shit that's not in the video area
            </div>
        </Container>
    );
}
